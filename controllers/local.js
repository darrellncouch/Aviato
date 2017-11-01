const knex = require("../db/knex.js");

 module.exports = {

check: function(req, res){
  knex('local')
  .where('username', req.body.username)
  .then((result)=>{
    if(result[0].password == req.body.password){
      req.session.localUser = result[0];
      req.session.save(()=>{
        res.redirect('/local');
      })

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
  }, "*")
  .then(()=>{
    res.render('login');
  })
},

main: function(req, res){
  knex('questions')
  .join('trips', 'trips.id', '=', 'questions.trips_id')
  .select('questions.catagory', 'questions.question', 'trips.name', 'trips.description', 'trips.state', 'trips.city')
  .where('trips.state', req.session.localUser.state)
  .then((result)=>{
    res.render('localmain', {questions: result})
  })
},

createAnswer: function(req, res){
  knex('answers')
  .insert({
    answer: reg.pody.answer,
    question_id: req.params.id
  }, "*")
  .then(()=>{
    res.redirect()
  })
}

 }
