-- psql -d "postgres://ugyuhigb:5d3qkY5RC-HUtqvTUh3PsoiaY9knI4pO@heffalump.db.elephantsql.com/ugyuhigb" -f server/models/DB.sql

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  _id SERIAL PRIMARY KEY,
  first_name VARCHAR (50) NOT NULL,
  last_name VARCHAR (50) NOT NULL,
  email VARCHAR (50) NOT NULL UNIQUE,
  password VARCHAR (100) NOT NULL,
  avatar VARCHAR DEFAULT 'defaultAvatar.png',
);