exports.up = function(knex, Promise) {
  return knex.schema.createTable('decks', function(table){
    table.increments();
    table.integer('creator_id').references('users', 'id');
    table.string('name');
    table.string('desc');
    table.string('img');
    table.timestamp('dt_created').notNullable().defaultTo(knex.fn.now());
    table.timestamp('dt_modified').notNullable().defaultTo(knex.fn.now());
  });
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('decks');
};