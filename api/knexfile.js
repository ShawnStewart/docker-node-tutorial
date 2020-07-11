// Update with your config settings.

module.exports = {
    development: {
        client: 'pg',
        connection: process.env.POSTGRES_URL,
        migrations: {
            directory: './database/migrations',
        },
        seeds: {
            directory: './database/seeds',
        },
    },
};
