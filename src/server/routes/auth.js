var express = require('express');
var auth = require('../knex-queries/auth-queries');
var router = express.Router();

// *** Require Helpers *** //
var authHelpers = require('./helpers/auth-helpers');

router.post('/register', function(req, res, next) {
  
  auth.register(req.body)
  
  .then( function (result) {
    // create a jwt token
    var token = authHelpers.generateToken(req.body);

    // Send a 'success' status code and message when a new user is added
    res.status(200).json({ status: 'success',
                           data: { token: token,
                                   user: req.body }
                        });
  })
  
  .catch( function (error) { console.log('register route error', error); return error; });
  
});

module.exports = router;
