#[macro_use]
extern crate diesel;

pub mod schema;
pub mod models;

use std::env;

use dotenv::dotenv;
use diesel::{prelude::*};
use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder, delete};

use models::{ NewUser};

struct AppState {
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
    match diesel::insert_into(schema::users::table)
    .values(user.0)
    .execute(&data.db_connection) {
        Ok(_) => HttpResponse::Ok().body(format!("Success. Created user.")),
        Err(_) => HttpResponse::InternalServerError().body("Failed to create user!"),
    }
}

#[delete("/users/delete/{id}")]
async fn delete_user(state : web::Data<AppState>, path : web::Path<i32>) -> impl Responder{
    use schema::users::dsl::*;
    let user_id = path.into_inner();
    match diesel::delete(users.filter(id.eq(user_id))).execute(&state.db_connection)
    {

        Ok(_) => HttpResponse::Ok().body("Delete successful???"),
        Err(_) => HttpResponse::InternalServerError().body("couldn't delete")
    }
}
#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();

    HttpServer::new(|| {
        let database_url = env::var("DATABASE_URL")
        .expect("DATABASE_URL must be set");
        let db_connection = diesel::pg::PgConnection::establish(&database_url)
        .expect(&format!("Error connecting to {}", database_url));

        App::new()
            .app_data(web::Data::new(AppState {
                db_connection: db_connection,
            }))
            .service(hello)
            .service(create_user).
            service(delete_user)
    })
    .bind((
        "127.0.0.1", 
        match env::var("PORT") {
           Ok(port) => port.parse::<u16>().unwrap(),
           Err(_) => 8080,
        }
    ))?
    .run()
    .await
}

