var knex = require('../../../db/knex');

module.exports = {
  
  getSavedDecks: function (userID) {
    return knex('users_decks')
          .innerJoin('decks', 'users_decks.deck_id', 'decks.id')
          .where('users_decks.user_id', userID);
  }

};
