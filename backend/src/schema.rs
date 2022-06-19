table! {
    users (id) {
        id -> Int4,
        email -> Varchar,
        first_name -> Nullable<Text>,
        last_name -> Nullable<Text>,
        profile_picture_uri -> Nullable<Text>,
        year -> Nullable<Text>,
        major -> Nullable<Text>,
    }
}
