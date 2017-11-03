const knex = require("../db/knex.js");

 module.exports = {

check: function(req, res){
  knex('local')
  .where('username', req.body.username)
  .then((result)=>{
    if(result.length === 0){
        res.render('login', {id: 'local', message: 'username or password is incorrect'})
    }
    else{
    if(result[0].password == req.body.password){
      req.session.localUser = result[0];
      req.session.save(()=>{
        res.redirect('/local');
      })

    }
    else{
        res.render('login', {id: 'local', message: 'username or password is incorrect'})

    }
    }

  })
},

reg: function(req, res){
  res.render('locreg');
},

register: function(req, res){
  knex('local')
  .insert({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    city: req.body.city,
    state: req.body.state
  }, "*")
  .then(()=>{
    res.render('login', {id: 'local', message: 'no'});
  })
},

main: function(req, res){
  knex('questions')
  .join('trips', 'trips.id', '=', 'questions.trips_id')
  .select('questions.id', 'questions.catagory', 'questions.question', 'trips.name', 'trips.description', 'trips.state', 'trips.city', 'trips.startDate', 'trips.endDate')
  .where('trips.state', req.session.localUser.state)
  .join('travelers', 'travelers.id', '=', 'questions.travelers_id')
  .select('travelers.name as travelersname')
  .then((result)=>{
    knex('answers')
    .where('local_id', req.session.localUser.id)
    .then((resultTwo)=>{
      res.render('localmain', {questions: result, answers: resultTwo, local: req.session.localUser, filter: 'unfiltered'})
    })
  })
},

createAnswer: function(req, res){
  knex('answers')
  .insert({
    answer: req.body.answer,
    favorite: false,
    question_id: req.params.id,
    local_id: req.session.localUser.id
  }, "*")
  .then((result)=>{
    res.redirect('/local')
  })
},

filter: function(req, res){
  knex('questions')
  .join('trips', 'trips.id', '=', 'questions.trips_id')
  .select('questions.id', 'questions.catagory', 'questions.question', 'trips.name', 'trips.description', 'trips.state', 'trips.city', 'trips.startDate', 'trips.endDate')
  .where('trips.state', req.session.localUser.state)
  .join('travelers', 'travelers.id', '=', 'questions.travelers_id')
  .select('travelers.name as travelersname')
  .then((result)=>{
    knex('answers')
    .where('local_id', req.session.localUser.id)
    .then((resultTwo)=>{
    let filterResult = result.filter((item)=>{return item.catagory === req.body.filterCatagory})
    console.log(resultTwo)
    res.render('localmain', {questions: filterResult, local: req.session.localUser, filter: req.body.filterCatagory, answers: resultTwo})
  })
  })
},

unansweredMain: function(req, res){
  knex('questions')
  .join('trips', 'trips.id', '=', 'questions.trips_id')
  .select('questions.id', 'questions.catagory', 'questions.question', 'trips.name', 'trips.description', 'trips.state', 'trips.city', 'trips.startDate', 'trips.endDate')
  .where('trips.state', req.session.localUser.state)
  .join('travelers', 'travelers.id', '=', 'questions.travelers_id')
  .select('travelers.name as travelersname')
  .then((result)=>{
    knex('answers')
    .where('local_id', req.session.localUser.id)
    .then((resultTwo)=>{
      res.render('localunanswered', {questions: result, answers: resultTwo, local: req.session.localUser, filter: 'unfiltered'})
    })
  })
},

unansweredFilter:function (req, res){
  knex('questions')
  .join('trips', 'trips.id', '=', 'questions.trips_id')
  .select('questions.id', 'questions.catagory', 'questions.question', 'trips.name', 'trips.description', 'trips.state', 'trips.city', 'trips.startDate', 'trips.endDate')
  .where('trips.state', req.session.localUser.state)
  .join('travelers', 'travelers.id', '=', 'questions.travelers_id')
  .select('travelers.name as travelersname')
  .then((result)=>{
    knex('answers')
    .where('local_id', req.session.localUser.id)
    .then((resultTwo)=>{
    let filterResult = result.filter((item)=>{return item.catagory === req.body.filterCatagory})
    res.render('localunanswered', {questions: filterResult, local: req.session.localUser, filter: req.body.filterCatagory, answers: resultTwo})
        })
  })
},

answeredMain: function(req, res){
  knex('questions')
  .join('trips', 'trips.id', '=', 'questions.trips_id')
  .select('questions.id', 'questions.catagory', 'questions.question', 'trips.name', 'trips.description', 'trips.state', 'trips.city', 'trips.startDate', 'trips.endDate')
  .where('trips.state', req.session.localUser.state)
  .join('travelers', 'travelers.id', '=', 'questions.travelers_id')
  .select('travelers.name as travelersname')
  .then((result)=>{
    knex('answers')
    .where('local_id', req.session.localUser.id)
    .then((resultTwo)=>{
      res.render('localanswered', {questions: result, answers: resultTwo, local: req.session.localUser, filter: 'unfiltered'})
    })
  })
},

answeredFilter:function (req, res){
  knex('questions')
  .join('trips', 'trips.id', '=', 'questions.trips_id')
  .select('questions.id', 'questions.catagory', 'questions.question', 'trips.name', 'trips.description', 'trips.state', 'trips.city', 'trips.startDate', 'trips.endDate')
  .where('trips.state', req.session.localUser.state)
  .join('travelers', 'travelers.id', '=', 'questions.travelers_id')
  .select('travelers.name as travelersname')
  .then((result)=>{
    knex('answers')
    .where('local_id', req.session.localUser.id)
    .then((resultTwo)=>{
    let filterResult = result.filter((item)=>{return item.catagory === req.body.filterCatagory})
    res.render('localanswered', {questions: filterResult, local: req.session.localUser, filter: req.body.filterCatagory, answers: resultTwo})
        })
  })
},

deleteAnswer: function(req, res){
  knex('answers')
  .del()
  .where('id', req.params.id)
  .then(()=>{
    res.redirect('/local');
  })
},

editAnswer: function(req, res){
  knex('answers')
  .update({
    answer: req.body.answer
  })
  .where('id', req.params.id)
  .then(()=>{
    res.redirect('/local');
  })
},

logout: function(req, res){
  delete req.session.localUser;
  req.session.save(()=>{
    res.redirect('/traveler/login');
  })
}



 }
