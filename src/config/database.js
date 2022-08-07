const knex = require("knex")
let defaultConnection = null;

module.exports = {
    getDefaultInstance() {
        if (!defaultConnection) {
            defaultConnection = knex({
                client: 'pg',
                connection: {
                    host: process.env.DB_HOST,
                    port: process.env.DB_PORT,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_NAME
                },
            })
        }

        return defaultConnection;
    }
}