//Update the name of the controller below and rename the file.
const traveler = require("../controllers/traveler.js")
const local = require("../controllers/local.js")
module.exports = function(app){

  app.get('/', traveler.index)

  app.get('/traveler/login', traveler.login);

  app.post('/traveler/login', traveler.check);

  app.get('/traveler/rgister', travler.reg);

  app.post('/traveler/register', traveler.register);

  app.get('/traveler', traveler.main);

  app.post('/local/login', local.check);

  app.get('/local/register', local.reg);

  app.post('/local/register', local.register);

  app.get('/local', local.main);



}
