const knex = require("../db/knex.js");

module.exports = {
  index: function(req, res){
    res.render('index');
  },

   login: function(req, res) {
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
  },

  reg: function(req, res){
    res.render('travreg');
  },

  register:  function(req, res){
    knex('travelers')
    .insert({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    .then(()=>{
      res.render('login');
    })

  },

  main: function(req, res){
    res.render('travmain');
  }
}
