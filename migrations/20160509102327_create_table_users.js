exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments();
    table.string('email').unique();
    table.string('password');
    table.string('name');
  });
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};