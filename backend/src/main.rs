#[macro_use]
extern crate diesel;

pub mod models;
pub mod schema;

use std::env;

use actix_web::{delete, get, post, put, web, App, HttpResponse, HttpServer, Responder};
use diesel::prelude::*;
use dotenv::dotenv;

use models::{NewUser, User};
use schema::users;

use crate::schema::users::dsl;


pub struct AppState {
    db_connection: PgConnection,
}

#[get("/")]
async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Hello world!")
}

// Creates a user using information from json. TODO - On success will return the unique id of the newly created user
#[post("/users")]
async fn create_user(data: web::Data<AppState>, user: web::Json<NewUser>) -> impl Responder {
    println!("{:?}", user.0);
    create_user_logic(data, user.0)
}

fn create_user_logic(data: web::Data<AppState>, user: NewUser) -> HttpResponse {
    match diesel::insert_into(schema::users::table)
        .values(user)
        .execute(&data.db_connection)
    {
        Ok(_) => HttpResponse::Ok().body(format!("Success. Created user.")),
        Err(_) => HttpResponse::InternalServerError().body("Failed to create user!"),
    }
}

#[put("/users/{id}")]
async fn update_user(
    data: web::Data<AppState>,
    user: web::Json<NewUser>,
    path: web::Path<i32>,
) -> impl Responder {
    use schema::users::dsl::*;

    let id_number = path.into_inner();
    let user = user.0.mutate(id_number);

    match diesel::update(users.filter(id.eq(id_number)))
        .set(&user)
        .execute(&data.db_connection)
    {
        Ok(smth) => {
            match smth {
                0 => create_user_logic(data, user.mutate()), //create a new user
                _ => HttpResponse::Ok().body("User has been updated"),
            }
        }
        Err(_) => HttpResponse::InternalServerError().body("We couldn't update this user"),
    }
}

#[delete("/users/delete/{id}")]
async fn delete_user(state: web::Data<AppState>, path: web::Path<i32>) -> impl Responder {
    use schema::users::dsl::*;
    let user_id = path.into_inner();
    match diesel::delete(users.filter(id.eq(user_id))).execute(&state.db_connection) {
        Ok(_) => HttpResponse::Ok().body("Delete successful???"),
        Err(_) => HttpResponse::InternalServerError().body("couldn't delete"),
    }
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();

    HttpServer::new(|| {
        let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
        let db_connection = diesel::pg::PgConnection::establish(&database_url)
            .expect(&format!("Error connecting to {}", database_url));

        App::new()
            .app_data(web::Data::new(AppState {
                db_connection: db_connection,
            }))
            .service(hello)
            .service(create_user)
            .service(delete_user)
            .service(update_user)

    })
    .bind((
        "127.0.0.1",
        match env::var("PORT") {
            Ok(port) => port.parse::<u16>().unwrap(),
            Err(_) => 8080,
        },
    ))?
    .run()
    .await
}
