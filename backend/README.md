# backend

## Instructions

Edit the `.env` file to set the port (default 8080) and the postgres database url. Replace `USERNAME` and `PASSWORD` with a database user and do not change anything else if you would like a database to be created for you. Note that the default postgres user has no password and you must give it one if you want to use it here.

Enter the command `cargo run` and on your browser, go to `localhost:8080` to view the hello world page.

## Setting up the docker container
- Install docker and docker-compose and have it in your PATH
  - make sure u have a docker daemon active
- run `docker-compose up` on the terminal
  - Note the name of the database on the terminal
  - you can run `docker ps` in another terminal to check if the database is up
- create another terminal instance and run the command `docker exec -ti *name-of-database* bash` to interface with the docker container
- run this `psql -d postgres -U dboperator` to interface with postgress
  - dboperator is the username (as found in docker-compose.yaml), postgres is the name of the service/image/db

  
