var express = require('express');
var auth = require('../knex-queries/auth-queries');
var bcrypt = require('bcrypt'); 
var router = express.Router();

// *** Require Helpers *** //
var authHelpers = require('./helpers/auth-helpers');

// *** Status Messages *** //
// Failure messages
var messageFailureRegister = { status: 'fail', message: 'This email is already registered' };
var messageFailureLogin = { status: 'fail', message: 'This email and/or password is incorrect' };

// Success messages
var messageSuccess = function(result, token) { return { status: 'success',
                                                        data: { token: token,
                                                                userID: result[0].id,
                                                                name: result[0].name }
                                                      } 
                                             };

// *** Routes *** //
// Registration route
router.post('/register', function(req, res, next) {
  
  // Submit the new user object to the database
  auth.register(req.body)
    
  .then( function (result) { // Create a JWT
                             var token = authHelpers.generateToken(result[0]);

                             // Send a 'success' status code and message when a new user is added
                             res.status(200).json(messageSuccess(result, token));
  })
  
  .catch( function (error) { return res.status(401).json(messageFailureRegister); });
  
});

// Login route
router.post('/login', function(req, res, next) {
      
  // Ensure the user exists
  auth.findOne(req.body.email)
  
  .then( function (result) { // Compare the plain text password with the hashed password
                             var compare = bcrypt.compareSync(req.body.password, result[0].password);
                             
                             // If the comparison fails, throw an error  
                             if (!compare) { throw 'login error'; }
                             
                             // If the comparison is successful…
                             else { // Create a JWT
                                    var token = authHelpers.generateToken(result[0]);
                                                                        
                                    // Send a 'success' status code and message
                                    return res.status(200).json(messageSuccess(result, token));
                                  }
                                                             
  })
  
  .catch( function (error) { return res.status(401).json(messageFailureLogin); });
  
});


// Find user info with token route
router.post('/token', function(req, res, next) {
    
  return res.status(200).json({status: 'success', user: authHelpers.decodeToken(req.body.token)});
  
  
});

module.exports = router;
