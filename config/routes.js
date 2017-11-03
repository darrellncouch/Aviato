//Update the name of the controller below and rename the file.
const traveler = require("../controllers/traveler.js")
const local = require("../controllers/local.js")
module.exports = function(app){

  app.get('/', traveler.login);

  app.get('/traveler/login', traveler.login);

  app.post('/traveler/login', traveler.check);

  app.get('/traveler/register', traveler.reg);

  app.post('/traveler/register', traveler.register);

  app.get('/traveler', traveler.main);

  app.post('/traveler/addtrip', traveler.addTrip);

  app.get('/trip/:id', traveler.getOneTrip);

  app.post('/editTrip/:id', traveler.editTrip);

  app.get('/deleteTrip/:id', traveler.deleteTrip);

  app.post('/addQuestion/:id', traveler.addQuestion);

  app.post('/editQuestion/:id/:trip_id', traveler.editQuestion);

  app.get('/deleteQuestion/:id/:trip_id', traveler.deleteQuestion);

  app.post('/local/login', local.check);

  app.get('/local/register', local.reg);

  app.post('/local/register', local.register);

  app.get('/local', local.main);

  app.post('/local/filter', local.filter);

  app.get('/local/unanswered', local.unansweredMain);

  app.post('/localunanswered/filter', local.unansweredFilter);

  app.get('/local/answered', local.answeredMain);

  app.post('/localanswered/filter', local.answeredFilter);

  app.post('/answer/:id', local.createAnswer);

  app.get('/deleteAnswer/:id', local.deleteAnswer);

  app.post('/editAnswer/:id', local.editAnswer);

  app.get('/favoriteAnswer/:id/:trip_id', traveler.favoriteAnswer);

  app.get('/local/logout', local.logout);

  app.get('/traveler/logout', traveler.logout);

}
