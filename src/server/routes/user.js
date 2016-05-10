var express = require('express');
var user = require('../knex-queries/user-queries');
var router = express.Router();


router.get('/:id/decks', function(req, res, next) {
  
  user.getSavedDecks(req.params.id)
  
  
});


module.exports = router;