
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users_scores').del(),

    // Inserts seed entries
    knex('users_scores').insert({ user_id: 1, card_id: 1,  score: 2 }),
    knex('users_scores').insert({ user_id: 1, card_id: 2,  score: 2 }),
    knex('users_scores').insert({ user_id: 1, card_id: 3,  score: 2 }),
    knex('users_scores').insert({ user_id: 1, card_id: 4,  score: 1 }),
    knex('users_scores').insert({ user_id: 1, card_id: 5,  score: 1 }),
    knex('users_scores').insert({ user_id: 1, card_id: 6,  score: 0 }),
                                                                    
    knex('users_scores').insert({ user_id: 1, card_id: 7,  score: 2 }),
    knex('users_scores').insert({ user_id: 1, card_id: 8,  score: 2 }),
    knex('users_scores').insert({ user_id: 1, card_id: 9,  score: 2 }),
    knex('users_scores').insert({ user_id: 1, card_id: 10, score: 1 }),
    knex('users_scores').insert({ user_id: 1, card_id: 11, score: 1 }),
    knex('users_scores').insert({ user_id: 1, card_id: 12, score: 0 }),
                                                                    
    knex('users_scores').insert({ user_id: 1, card_id: 13, score: 2 }),
    knex('users_scores').insert({ user_id: 1, card_id: 14, score: 2 }),
    knex('users_scores').insert({ user_id: 1, card_id: 15, score: 2 }),
    knex('users_scores').insert({ user_id: 1, card_id: 16, score: 1 }),
    knex('users_scores').insert({ user_id: 1, card_id: 17, score: 1 }),
    knex('users_scores').insert({ user_id: 1, card_id: 18, score: 0 }),
    knex('users_scores').insert({ user_id: 1, card_id: 19, score: 2 }),
    knex('users_scores').insert({ user_id: 1, card_id: 20, score: 2 }),
    knex('users_scores').insert({ user_id: 1, card_id: 21, score: 2 }),
    knex('users_scores').insert({ user_id: 1, card_id: 22, score: 1 }),
    knex('users_scores').insert({ user_id: 1, card_id: 23, score: 1 }),
    knex('users_scores').insert({ user_id: 1, card_id: 24, score: 0 }),
                                                                    
    knex('users_scores').insert({ user_id: 1, card_id: 25, score: 2 }),
    knex('users_scores').insert({ user_id: 1, card_id: 26, score: 2 }),
    knex('users_scores').insert({ user_id: 1, card_id: 27, score: 1 }),
                                                                    
    knex('users_scores').insert({ user_id: 2, card_id: 7,  score: 2 }),
    knex('users_scores').insert({ user_id: 2, card_id: 8,  score: 2 }),
    knex('users_scores').insert({ user_id: 2, card_id: 9,  score: 2 }),
    knex('users_scores').insert({ user_id: 2, card_id: 10, score: 1 }),
    knex('users_scores').insert({ user_id: 2, card_id: 11, score: 1 }),
    knex('users_scores').insert({ user_id: 2, card_id: 12, score: 0 }),
                                                                    
    knex('users_scores').insert({ user_id: 2, card_id: 13, score: 2 }),
    knex('users_scores').insert({ user_id: 2, card_id: 14, score: 2 }),
    knex('users_scores').insert({ user_id: 2, card_id: 15, score: 2 }),
    knex('users_scores').insert({ user_id: 2, card_id: 16, score: 1 }),
    knex('users_scores').insert({ user_id: 2, card_id: 17, score: 1 }),
    knex('users_scores').insert({ user_id: 2, card_id: 18, score: 0 }),
    knex('users_scores').insert({ user_id: 2, card_id: 19, score: 2 }),
    knex('users_scores').insert({ user_id: 2, card_id: 20, score: 2 }),
    knex('users_scores').insert({ user_id: 2, card_id: 21, score: 2 }),
    knex('users_scores').insert({ user_id: 2, card_id: 22, score: 1 }),
    knex('users_scores').insert({ user_id: 2, card_id: 23, score: 1 }),
    knex('users_scores').insert({ user_id: 2, card_id: 24, score: 0 }),
                                                                    
    knex('users_scores').insert({ user_id: 3, card_id: 1,  score: 2 }),
    knex('users_scores').insert({ user_id: 3, card_id: 2,  score: 2 }),
    knex('users_scores').insert({ user_id: 3, card_id: 3,  score: 2 }),
    knex('users_scores').insert({ user_id: 3, card_id: 4,  score: 1 }),
    knex('users_scores').insert({ user_id: 3, card_id: 5,  score: 1 }),
    knex('users_scores').insert({ user_id: 3, card_id: 6,  score: 0 }),
                                                                    
    knex('users_scores').insert({ user_id: 3, card_id: 25, score: 2 }),
    knex('users_scores').insert({ user_id: 3, card_id: 26, score: 2 }),
    knex('users_scores').insert({ user_id: 3, card_id: 27, score: 1 })
  );
};
