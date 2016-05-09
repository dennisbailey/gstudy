
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({email: 'test@test.com',  password: 'gstudy', name: 'Alpha'}),
    knex('users').insert({email: 'test1@test.com', password: 'gstudy', name: 'Bravo'}),
    knex('users').insert({email: 'test2@test.com', password: 'gstudy', name: 'Charlie'})
  );
};
