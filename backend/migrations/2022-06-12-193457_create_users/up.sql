CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR NOT NULL,
    first_name TEXT,
    last_name TEXT,
    profile_picture_uri TEXT DEFAULT 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    year TEXT,
    major TEXT
)