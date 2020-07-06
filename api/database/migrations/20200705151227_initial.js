const Knex = require('knex');

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    await knex.schema.createTable('users', (table) => {
        table.increments().notNullable();
        table.string('username').notNullable();
    });
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('users');
};
