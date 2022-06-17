#[macro_use]
extern crate diesel;

pub mod schema;
pub mod models;

use std::{env};
use std::cell::RefCell;
use std::collections::LinkedList;

use dotenv::dotenv;
use diesel::prelude::*;
use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};

use models::{User, NewUser};

struct AppState {
    db : RefCell<LinkedList<NewUser>>
}

#[get("/")]
async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Hello world!")
}

// Creates a user using information from json. TODO - On success will return the unique id of the newly created user
#[post("/users")]
async fn create_user(data: web::Data<AppState>, user: web::Json<NewUser>) -> impl Responder {
    let mut stuff = data.db.borrow_mut();
    stuff.push_front(user.0);
    println!("{:?}", stuff.front().unwrap());
    println!("{}", stuff.len());
    
    return HttpResponse::Ok().body(format!("Mission complete, size is {}", stuff.len()));
}

#[get("/users/get")]
async fn get_users(data: web::Data<AppState>) -> impl Responder{
    return HttpResponse::Ok().body(data.db.borrow().len().to_string());
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();

    HttpServer::new(|| {

        App::new()
            .app_data(web::Data::new(AppState {
                db : RefCell::new(LinkedList::new()),
            }))
            .service(hello)
            .service(create_user).service(get_users)
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

