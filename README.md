Instructions for run application:
======================================

- Clone repository
- Create **.env** file based **.env.example**
- Execute command **docker-compose up -d** for create one container with postgres and another container with pgadmin(client for postgres database)
- Execute command **npm i**
- Execute command **npx knex --knexfile=./src/knexfile.js migrate:latest** to run migrations
- Execute command **npx knex --knexfile=./src/knexfile.js migrate:down** to back database for previous version, previous migration.
- Execute command **npx knex --knexfile=./src/knexfile.js seed:run** to run seeds 
- Execute command **npm run start:dev** to run application
