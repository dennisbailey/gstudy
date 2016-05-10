var express = require('express');
var auth = require('../knex-queries/auth-queries');
var bcrypt = require('bcrypt'); 
var router = express.Router();

// *** Require Helpers *** //
var authHelpers = require('./helpers/auth-helpers');

router.post('/register', function(req, res, next) {
  
  var promises = [];
  
  promises.push(auth.register(req.body));
  promises.push(auth.findOne(req.body.email));
  
  Promise.all(promises)
  
  .then( function (result) {

    // create a jwt token
    var token = authHelpers.generateToken(result[1][0]);

    // Send a 'success' status code and message when a new user is added
    res.status(200).json({ status: 'success',
                           data: { token: token,
                                   userID: result[1][0].id,
                                   name: result[1][0].name }
                        });
  })
  
  .catch( function (error) { return res.status(401).json({ status: 'fail',
                                                           message: 'email and/or user already exists'}); });
  
});


router.post('/login', function(req, res, next) {
      
  // Ensure the user exists
  auth.findOne(req.body.email)
  
  .then( function (result) { var user = result[0];
                                                          
                             // Compare the plain text password with the hashed password
                             var compare = bcrypt.compareSync(req.body.password, user.password);
                               
                             if (!compare) { return res.status(401).json({ status: 'fail',
                                                                           message: 'email and/or password is incorrect.'});
                             };
                             
                             if (compare) { var token = authHelpers.generateToken(req.body);
                                            return res.status(200).json({ status: 'success',
                                                                          data: { token: token,
                                                                                  userID: user.id,
                                                                                  name: user.name }
                                                                        });
                               
                             }
                                                             
  })
  
  .catch( function (error) { return res.status(401).json({ status: 'fail',
                                                           message: 'email and/or password is incorrect.'}); 
  });
  
});

module.exports = router;
