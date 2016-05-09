exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', function(table){
    table.increments();
    table.integer('deck_id').references('decks', 'id');
    table.text('question');
    table.text('answer');
    table.string('answer_img');
    table.string('question_img');
    table.timestamp('dt_created').notNullable().defaultTo(knex.fn.now());
    table.timestamp('dt_modified').notNullable().defaultTo(knex.fn.now());
  });
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
};