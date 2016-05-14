
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('decks').del(),

    // Inserts seed entries
    knex('decks').insert({ creator_id: 1, 
                           name: 'Javascript Primitive Data Types',
                           img: 'http://www.djsoutsourcing.com/wp-content/uploads/2015/10/javascript-Djs-Outsourcing.png',
                           desc: 'A survey of the primitive data types'}),
    knex('decks').insert({ creator_id: 2, 
                           name: 'Robot or Not',
                           img: 'https://cottonbureau.imgix.net/products/originals/5452_woRu.png?bg=FFF&chromasub=444&fit=max&fm=pjpg&ixlib=php-1.1.0&q=50&usm=10&usmrad=2.5&w=300', 
                           desc: 'Is it a robot?'}),
    knex('decks').insert({ creator_id: 2, 
                           name: 'Cannonical Bagel Flavors',
                           img: 'http://bkbagel.com/wp-content/uploads/2012/10/bk-bagels.jpg',
                           desc: 'As determined by John Siracusa'}),
    knex('decks').insert({ creator_id: 3, 
                           name: 'The Ships of Horatio Hornblower',
                           img: 'https://s-media-cache-ak0.pinimg.com/736x/1a/68/4b/1a684b04cb2ea22bea9f988287067354.jpg', 
                           desc: 'Can you name the novel they appeared in?'})
  );
};