#[macro_use]
extern crate diesel;

pub mod models;
pub mod schema;
pub mod endpoints;

use std::env;

use dotenv::dotenv;
use diesel::prelude::*;
use actix_web::{web, App, HttpServer};

pub struct AppState {
    db_connection: PgConnection,
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
            .service(endpoints::hello)
            .service(endpoints::create_user).
            service(endpoints::delete_user)
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

