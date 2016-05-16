var express = require('express');
var user = require('../knex-queries/user-queries');
var router = express.Router();


router.get('/:userID', function(req, res, next) {
  
  user.getSavedDecks(req.params.userID)
  
  .then( function (result) { res.send(result) } )
  
  .catch( function (error) { console.log('route error', error); });
  
  
});


router.get('/deck/:deckID', function(req, res, next) {
  
  user.getCards(req.params.deckID)
  
  .then( function (result) { res.send(result) } )
  
  .catch( function (error) { console.log('route error', error); });
  
  
});


module.exports = router;