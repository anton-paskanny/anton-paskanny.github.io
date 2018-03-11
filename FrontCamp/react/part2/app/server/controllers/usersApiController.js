var logger = require('../logger');
var getRequestURL = require('../utils/parseUrl.js');
var passport = require("passport");
var User = require("../models/user");

// signup action
exports.doSignup = function(req, res, next) {

  logger.log({
    level: 'debug',
    message: 'Signup action',
    timestamp: (new Date()).toUTCString(),
    label: { url: getRequestURL(req), body: req.body }
  });

  res.status(200).json({
    success: true,
    msg: 'You have successfully signed up!',
    user: req.user
  });
};

// signin action
exports.doSignIn = function(req, res, next) {

  logger.log({
    level: 'debug',
    message: 'Signin action',
    timestamp: (new Date()).toUTCString(),
    label: { url: getRequestURL(req), body: req.body }
  });

  res.status(200).json({
    success: true,
    msg: 'You have successfully signed in!',
    user: req.user
  });
};

// logout action
exports.doLogOut = function(req, res, next) {
  req.logout();
  req.session.destroy();
  res.clearCookie("connect.sid");

  res.status(200).json({
    success: true,
    msg: 'User have been successfully loged out!',
    user: null
  });
}
