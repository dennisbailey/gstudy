
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users_decks').del(),

    // Inserts seed entries
    knex('users_decks').insert({user_id: 1, deck_id: 1}),
    knex('users_decks').insert({user_id: 1, deck_id: 2}),
    knex('users_decks').insert({user_id: 1, deck_id: 3}),
    knex('users_decks').insert({user_id: 1, deck_id: 4}),
    knex('users_decks').insert({user_id: 2, deck_id: 2}),
    knex('users_decks').insert({user_id: 2, deck_id: 3}),
    knex('users_decks').insert({user_id: 3, deck_id: 4}),
    knex('users_decks').insert({user_id: 3, deck_id: 1})
  );
};
