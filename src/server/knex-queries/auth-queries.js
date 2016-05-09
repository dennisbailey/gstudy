var knex = require("../../../db/knex");


module.exports = {
  
  register: function (newUser) {
    return knex('users')
          .insert(newUser);
  }

};
