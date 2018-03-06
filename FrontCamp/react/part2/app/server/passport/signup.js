var LocalStrategy   = require('passport-local').Strategy;
var User = require('../models/user');
var bCrypt = require('bcrypt-nodejs');

var createHash = function(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}

var signUpUser = function(passport) {

  	passport.use('signup', new LocalStrategy({
              passReqToCallback : true
          },
          function(req, username, password, done) {
            // find a user in Mongo with provided username
            User.findOne({ 'username' :  username }, function(err, user) {

                // In case of any error, return using the done method
                if (err) return done(err);

                // User already exists
                if (user) {
                  const err = new Error("User already exists");
                  err.name = 'IncorrectCredentialsError';

                  return done(err);
                }

                var newUser = new User();

                // set the user's local credentials
                newUser.username = username;
                newUser.password = createHash(password);

                // save the user
                return newUser.save(function(err, savedUser) {
                    if (err) return done(err);

                    console.log('User was saved: ', savedUser);
                    return done(null, savedUser);
                });
            });
          })
    );
}

module.exports = signUpUser;
