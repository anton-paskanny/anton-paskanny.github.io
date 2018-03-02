var logger = require('../logger');
var getRequestURL = require('../utils/parseUrl.js');
var passport = require("passport");
var User = require("../models/user");

// main page
exports.home = function(req, res) {

  logger.log({
    level: 'debug',
    message: 'Home page',
    timestamp: (new Date()).toUTCString(),
    label: { url: getRequestURL(req) }
  });

  res.send({ msg: "Main page!!!" });
}

// signup page
exports.signup = function(req, res) {

  logger.log({
    level: 'debug',
    message: 'Redirect to registration page',
    timestamp: (new Date()).toUTCString(),
    label: { url: getRequestURL(req) }
  });

  res.send({ msg: "Signup page" });

  //res.redirect('/signup');
};

// signup action
exports.doSignup = function(req, res) {

  logger.log({
    level: 'debug',
    message: 'Signup action',
    timestamp: (new Date()).toUTCString(),
    label: { url: getRequestURL(req), body: req.body }
  });

  res.send({
    msg: "Signup was completed!",
    userInSession: req.session.passport.user
  });
};

// signin page
exports.signin = function(req, res) {

  logger.log({
    level: 'debug',
    message: 'Redirect to login page',
    timestamp: (new Date()).toUTCString(),
    label: { url: getRequestURL(req) }
  });

  res.send({ msg: "Signin page" });
};

// signin action
exports.doSignIn = function(req, res) {

  logger.log({
    level: 'debug',
    message: 'Signin action',
    timestamp: (new Date()).toUTCString(),
    label: { url: getRequestURL(req), body: req.body }
  });

  res.send({
    msg: "Success login",
    userSessionId: req.session.passport.user,
    user: req.user
  });

};
