// TODO create tests for each endpoint
use crate::models::{NewUser, User};
use crate::AppState;
use crate::schema;

use diesel::prelude::*;
use actix_web::{web, get, post, Responder, HttpResponse, delete, put};
use schema::users::dsl::*;

#[get("/")]
async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Hello world!")
}

// Returns a user's info in json from an id.
#[get("/users/{id}")]
async fn get_user(state: web::Data<AppState>, path: web::Path<i32>) -> impl Responder {
    let user_id = path.into_inner();
    match users.filter(id.eq(user_id)).load::<User>(&state.db_connection) {
        Ok(user_vector) if user_vector.len() == 1 => HttpResponse::Ok().json(user_vector.get(0)),
        Ok(_) | Err(_) => HttpResponse::InternalServerError().body("Cannot find user."),
    }
}

// Creates a user using information from json. On success returns the unique id of the newly created user
#[post("/users")]
async fn create_user(state: web::Data<AppState>, user: web::Json<NewUser>) -> impl Responder {
    match diesel::insert_into(schema::users::table)
    .values(user.0)
    .get_results::<User>(&state.db_connection) {
        Ok(results) => HttpResponse::Ok().body(results[0].id.to_string()),
        Err(_) => HttpResponse::InternalServerError().body("Failed to create user!"),
    }
}

// TODO documentation
#[put("/users/{id}")]
async fn update_user(data: web::Data<AppState>, user: web::Json<NewUser>, path: web::Path<i32>) -> impl Responder {
    let id_number = path.into_inner();
    let user = user.0.mutate(id_number);
    match diesel::update(users.filter(id.eq(id_number)))
        .set(&user)
        .execute(&data.db_connection) {
            Ok(0) => create_user_logic(data, user.mutate()), // Create a new user
            Ok(_) => HttpResponse::Ok().body("User has been updated"),
            Err(_) => HttpResponse::InternalServerError().body("We couldn't update this user"),
        }
}

// TODO documentation - helper function for PUT users/{id} endpoint
// TODO our code can be refactored to reduce repetition of code between the POST and PUT endpoints for users
fn create_user_logic(data: web::Data<AppState>, user: NewUser) -> HttpResponse {
    match diesel::insert_into(schema::users::table)
        .values(user)
        .execute(&data.db_connection) {
            Ok(_) => HttpResponse::Ok().body(format!("Success. Created user.")),
            Err(_) => HttpResponse::InternalServerError().body("Failed to create user!"),
        }
}

// Deletes a user from a user id.
#[delete("/users/{id}")]
async fn delete_user(state: web::Data<AppState>, path: web::Path<i32>) -> impl Responder {
    let user_id = path.into_inner();
    match diesel::delete(users.filter(id.eq(user_id))).execute(&state.db_connection) {
        Ok(_) => HttpResponse::Ok().body("Delete successful"),
        Err(_) => HttpResponse::InternalServerError().body("Couldn't delete"),
    }
}