
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users_scores').del(),

    // Inserts seed entries
    knex('users_scores').insert({user_id: 1, card_id: 1, score: 2}),
    knex('users_scores').insert({user_id: 1, card_id: 2, score: 2}),
    knex('users_scores').insert({user_id: 1, card_id: 3, score: 2}),
    knex('users_scores').insert({user_id: 1, card_id: 4, score: 1}),
    knex('users_scores').insert({user_id: 1, card_id: 5, score: 1}),
    knex('users_scores').insert({user_id: 1, card_id: 6, score: 0})
  );
};
