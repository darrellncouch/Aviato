const knex = require("../db/knex.js");

 module.exports = {

check: function(req, res){
  knex('local')
  .where('username', req.body.username)
  .then((result)=>{
    if(result[0].password == req.body.password){
      res.redirect('/local');
    }
    else{
      res.redirect('/traveler/login')
    }

  })
},

reg: function(req, res){
  res.render('locreg');
},

register: function(req, res){
  knex('local')
  .insert({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    city: req.body.city,
    state: req.body.state
  })
  .then(()=>{
    res.render('login');
  })
},

main: function(req, res){
  res.render('localmain');
}

 }
