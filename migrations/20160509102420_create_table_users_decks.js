exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_decks', function(table){
    table.increments();
    table.integer('user_id').references('users', 'id');
    table.integer('deck_id').references('decks', 'id');
  });
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_decks');
};