const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    res.render('login');
  },

  check: function(req, res){
    knex('travelers')
    .where('username', req.body.username)
    .then((result)=>{
      if(result[0].password == req.body.password){
        res.redirect('/traveler');
      }
      else{
        res.redirect('/traveler/login')
      }

    })
  }
}
