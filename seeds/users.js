var bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({ email: 'test@test.com',  
                           password: bcrypt.hashSync('gstudy', 10),
                           username: 'Alpha'}),
    knex('users').insert({ email: 'test1@test.com', 
                           password: bcrypt.hashSync('gstudy', 10),
                           username: 'Bravo'}),
    knex('users').insert({ email: 'test2@test.com', 
                           password: bcrypt.hashSync('gstudy', 10),
                           username: 'Charlie'})
  );
};
