var knex = require('../../../db/knex');
var bcrypt = require('bcrypt');

module.exports = {
  
  register: function (newUser) {
    return knex('users')
          .insert( { name: newUser.name,
                     email: newUser.email,
                     password: bcrypt.hashSync(newUser.password, 10)
          });
  },
  
  findOne: function (email) {
    return knex('users')
          .where ('email', email);
  }

};
