var moment = require('moment');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

var TOKEN_SECRET = '\x07q\xa1\xb0\xa0\xa7x\xda\xb2\xa9+g|\xd5\x9d\xd9\x9f\x12\xc4-I\x12Q\xfc';

authHelpers = {

  generateToken: function(user) {

                   return jwt.sign(user, TOKEN_SECRET, { expiresIn: "1h"});

  },
  
  
  decodeToken: function(token) {
                    return jwt.verify(token, TOKEN_SECRET);;
    
  },

  // Ensure authenticated
  ensureAuthenticated: function(req, res, next) {

                           // check headers for the presence of an auth object
                           if(!(req.headers && req.headers.authorization)) {
                             return res.status(400).json({ status: 'Failure',
                                                           message: 'No header present or no authorization header.' });
                           }


                           var token = req.headers.authorization;

                           if (token) { jwt.verify(token, TOKEN_SECRET, function(err, decoded) {

                               if (err) { return res.json({ success: false,
                                                            message: 'Failed to authenticate token' });
                               }

                              next();

                              });

                           } else { return res.status(403).send({ success: false,
                                                                  message: 'No token provided'}); }
                        }

};

module.exports = authHelpers;
