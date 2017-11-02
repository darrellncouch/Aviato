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
        req.session.travelerUser = result[0];
        req.session.save(()=>{
          res.redirect('/traveler');
        })
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
    knex('trips')
    .where('traveler_id', req.session.travelerUser.id)
    .then((result)=>{
      res.render('travmain', {trips: result});
    })
  },

  addTrip: function(req, res){
    knex('trips')
    .insert({
      name: req.body.name,
      description: req.body.description,
      city: req.body.city,
      state: req.body.state,
      traveler_id: req.session.travelerUser.id
    }, "*")
    .then((result)=>{
      res.redirect('/traveler');
    })
  },

  getOneTrip: function(req, res){
    knex('trips')
    .where('id', req.params.id)
    .then((result)=>{
      knex('questions')
      .where('trips_id', req.params.id)
      .then((resultTwo)=>{
        res.render('trip', {trip: result[0], questions: resultTwo});
      })

    })
  },

  addQuestion: function(req, res){
    knex('questions')
    .insert({
      catagory: req.body.catagory,
      question: req.body.question,
      travelers_id: req.session.travelerUser.id,
      trips_id: req.params.id
    }, "*")
    .then((result)=>{
      res.redirect('/trip/'+req.params.id);
    })
  }




}
