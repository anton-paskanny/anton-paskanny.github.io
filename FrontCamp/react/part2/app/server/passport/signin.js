var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user.js');
var bCrypt = require('bcrypt-nodejs');

var isValidPassword = function(user, password) {
  return bCrypt.compareSync(password, user.password);
}

var signInUser = function(passport) {

  passport.use('signin', new LocalStrategy({
          passReqToCallback : true
        },
        function(req, username, password, done) {
          // check in mongo if a user with username exists or not
          User.findOne({ 'username':  username }, function(err, user) {
                // In case of any error, return using the done method
                if (err) return done(err);

                // Username does not exist, redirect back
                if (!user) {
                  const err = new Error("User doesn't exist");
                  err.name = 'IncorrectCredentialsError';

                  return done(err);
                }

                // User exists but wrong password, log the error
                if (!isValidPassword(user, password)) {
                  const err = new Error("Incorrect password");
                  err.name = 'IncorrectCredentialsError';

                  return done(err);
                }

                // User and password both match, return user from done method
                // which will be treated like success
                return done(null, user);
          });
        }
  ));
}

module.exports = signInUser;
