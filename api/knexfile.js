// Update with your config settings.

module.exports = {
    development: {
        client: 'pg',
        connection: {
            database: process.env.POSTGRES_DB,
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            host: 'postgres',
        },
        migrations: {
            directory: './database/migrations',
        },
        seeds: {
            directory: './database/seeds',
        },
    },
};
