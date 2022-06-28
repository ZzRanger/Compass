use crate::models::NewUser;
use crate::AppState;
use crate::schema;

use diesel::prelude::*;
use actix_web::{web, get, post, Responder, HttpResponse, delete};

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