const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
login-registration-backend
  index: function(req, res){
    res.sendFile('index.html');
  }
  login: function(req, res) {


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
login-registration-backend
  },

  reg: function(req, res){
    res.render('travelReg');
  },

  register:  function(req, res){
    knex('travelers')
    .insert({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    .then(()=>{
      res.redirect('login');
    })

  }
}
