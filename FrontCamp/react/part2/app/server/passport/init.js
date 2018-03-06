var signInUser = require('./signin');
var signUpUser = require('./signup');
var User = require('../models/user');
var bCrypt = require('bcrypt-nodejs');
var LocalStrategy = require("passport-local").Strategy;

const initPassport = function(passport) {

  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
      User.findById(id, function(err, user) {
          done(err, user);
      });
  });

  signInUser(passport);
  signUpUser(passport);
}

module.exports = initPassport;
