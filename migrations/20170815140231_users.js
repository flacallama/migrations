
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments();  // ID column
    table.string('username');
    table.string('password');
    table.string('email').notNull();
    table.string('age');
    table.string('height')
  })
};
// CLI commands
// knex migrate:rollback
// knex migrate:latest     to update


exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
// knex migrate:rollback
// knex migrate:latest
// knex seed:run
