use serde::Deserialize;
use serde::Serialize;

use crate::schema::users;

#[derive(Deserialize, Queryable, AsChangeset, Debug, Serialize)]

pub struct User {
    pub id: i32,
    pub email: String,
    pub first_name: Option<String>,
    pub last_name: Option<String>,
    pub profile_picture_uri: Option<String>,
    pub year: Option<String>,
    pub major: Option<String>,
}

impl User {
    //rename and refactor
    pub fn mutate(self) -> NewUser {
        NewUser {
            email: self.email,
            first_name: self.first_name.unwrap(),
            last_name: self.last_name.unwrap(),
            profile_picture_uri: self.profile_picture_uri,
            year: self.year.unwrap(),
            major: self.major.unwrap(),
        }
    }
}
#[derive(Deserialize, Insertable, Debug)]
#[table_name = "users"]
pub struct NewUser {
    pub email: String,
    pub first_name: String,
    pub last_name: String,
    pub profile_picture_uri: Option<String>,
    pub year: String,
    pub major: String,
}

impl NewUser {
    pub fn mutate(self, id: i32) -> User {
        User {
            id,
            email: self.email,
            first_name: Some(self.first_name),
            last_name: Some(self.last_name),
            profile_picture_uri: self.profile_picture_uri,
            year: Some(self.year),
            major: Some(self.major),
        }
    }
}
