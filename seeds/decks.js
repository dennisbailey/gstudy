
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('decks').del(),

    // Inserts seed entries
    knex('decks').insert({creator_id: 1, name: 'Javascript Primitive Data Types', desc: 'A survey of the primitive data types'}),
    knex('decks').insert({creator_id: 2, name: 'Robot or Not', desc: 'Is it a robot?'}),
    knex('decks').insert({creator_id: 2, name: 'Cannonical Bagel Flavors', desc: 'Address all complaints to John Siracusa'}),
    knex('decks').insert({creator_id: 3, name: 'The Ships of Horatio Hornblower', desc: 'Can you name the novel they appeared in?'})
  );
};