const Authentcation = require('./controllers/authentication');

module.exports = function(app) {
  app.post('/signup', Authentcation.signup);
}