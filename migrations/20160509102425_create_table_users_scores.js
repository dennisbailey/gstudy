exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_scores', function(table){
    table.increments();
    table.integer('user_id').references('users', 'id');
    table.integer('card_id').references('cards', 'id');
    table.integer('score').defaultTo(0);
  });
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_scores');
};