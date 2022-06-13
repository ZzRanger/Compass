use serde::{Deserialize};

use crate::schema::users;

#[derive(Deserialize, Queryable)]
pub struct User {
    pub id: i32,
    pub email: Option<String>,
    pub first_name: Option<String>,
    pub last_name: Option<String>,
    pub profile_picture_uri: Option<String>,
    pub year: Option<String>,
    pub major: Option<String>,
}

#[derive(Deserialize, Insertable)]
#[table_name = "users"]
pub struct NewUser {
    pub email: String,
    pub first_name: String,
    pub last_name: String,
    pub profile_picture_uri: Option<String>,
    pub year: String,
    pub major: String,
}
