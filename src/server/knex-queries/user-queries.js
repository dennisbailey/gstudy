var knex = require('../../../db/knex');

module.exports = {
  
  getSavedDecks: function (userID) {
    return knex('users_decks')
          .innerJoin('decks', 'users_decks.deck_id', 'decks.id')
          .innerJoin('users', 'decks.creator_id', 'users.id')
          .where('users_decks.user_id', userID);
  },
  
  getCards: function (deckID) {
    return knex('users_scores')
          .innerJoin('cards', 'cards.id', 'users_scores.card_id')
          .where('cards.deck_id', deckID)
  }

};
