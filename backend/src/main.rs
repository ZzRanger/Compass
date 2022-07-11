#[macro_use]
extern crate diesel;

pub mod models;
pub mod schema;
pub mod endpoints;


use std::env;

use actix_web::{web, App, HttpServer};
use diesel::prelude::*;
use dotenv::dotenv;

<<<<<<< HEAD
=======
use models::{NewUser};

use crate::schema::users::dsl;

>>>>>>> 3fed4cf397fce3aa8a79b316a46531a7ddd73864
pub struct AppState {
    db_connection: PgConnection,
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();

    HttpServer::new(|| {
        let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
        let db_connection = diesel::pg::PgConnection::establish(&database_url)
            .expect(&format!("Error connecting to {}", database_url));

        App::new()
<<<<<<< HEAD
            .app_data(web::Data::new(AppState {
                db_connection: db_connection,
            }))
            .service(endpoints::hello)
            .service(endpoints::create_user)
            .service(endpoints::delete_user)
            .service(endpoints::update_user)

=======
            .app_data(web::Data::new(AppState { db_connection }))
            .service(hello)
            .service(create_user)
            .service(delete_user)
            .service(update_user)
>>>>>>> 3fed4cf397fce3aa8a79b316a46531a7ddd73864
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
