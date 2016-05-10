var knex = require('../../../db/knex');

module.exports = {
  
  getSavedDecks: function (userID) {
    return knex('decks')
          .where('user_id', userID);
  }

};
