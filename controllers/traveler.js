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
      if(result.length === 0){
        res.redirect('/traveler/login')
      }
      else{


      if(result[0].password == req.body.password){
        req.session.travelerUser = result[0];
        req.session.save(()=>{
          res.redirect('/traveler');
        })
      }
      else{
        res.redirect('/traveler/login')
      }
       }

    })
  },

  reg: function(req, res){
    res.render('travreg');
  },

  register:  function(req, res){
    knex('travelers')
    .insert({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }, "*")
    .then((result)=>{
      res.render('login');
    })

  },

  main: function(req, res){
    knex('trips')
    .where('traveler_id', req.session.travelerUser.id)
    .then((result)=>{
      res.render('travmain', {trips: result, traveler: req.session.travelerUser});
    })
  },

  addTrip: function(req, res){
    console.log("addTrip");
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

  editTrip: function(req, res){
    knex('trips')
    .update({
      name: req.body.name,
      description: req.body.description,
      city: req.body.city,
      state: req.body.state,
      traveler_id: req.session.travelerUser.id
    })
    .where('id', req.params.id)
    .then(()=>{
      res.redirect('/traveler');
    })
  },

  deleteTrip: function(req, res){
    knex('trips')
    .del()
    .where('id', req.params.id)
    .then(()=>{
      res.redirect('/traveler')
    })
  },

  getOneTrip: function(req, res){
    console.log("GetOneTrip");
    knex('trips')
    .where('id', req.params.id)
    .then((result)=>{
      knex('questions')
      .where('trips_id', req.params.id)
      .then((resultTwo)=>{
        knex('answers')
        .then((resultThree)=>{
          res.render('trip', {trip: result[0], questions: resultTwo, traveler: req.session.travelerUser, answers: resultThree})
        })

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
  },

  editQuestion: function(req, res){
    knex('questions')
    .update({
      catagory: req.body.catagory,
      question: req.body.question
    }, "*")
    .where('id', req.params.id)
    .then(()=>{
      res.redirect('/trip/'+req.params.trip_id);
    })
  },

  deleteQuestion: function(req, res){
    knex('questions')
    .del()
    .where('id', req.params.id)
    .then(()=>{
      res.redirect('/trip/'+req.params.trip_id);
    })
  },

  favoriteAnswer: function(req, res){
    knex('answers')
    .where('id', req.params.id)
    .then((result)=>{
      if(result[0].favorite === true){
        knex('answers')
        .update({
            favorite: false
        })
        .then(()=>{
          res.redirect('/trip/'+req.params.trip_id);
        })
      }else{
        knex('answers')
        .update({
            favorite: true
        })
        .then(()=>{
          res.redirect('/trip/'+req.params.trip_id);
        })
      }


    })
  },

  logout: function(req, res){
    delete req.session.travelerUser;
    req.session.save(()=>{
      res.redirect('/traveler/login');
    })
  }


}
