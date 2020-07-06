const knex = require('knex');
const config = require('../knexfile');

const env = process.env.NODE_ENV || 'development';
console.log('env', env);
console.log('knex config', config[env]);
module.exports = knex(config[env]);
