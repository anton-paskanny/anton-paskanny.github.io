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

  // return passport.authenticate('signup', (err, userData) => {
  //
  //   if (err) {
  //     return res.status(400).json({
  //       success: false,
  //       msg: err.message
  //     });
  //   }
  //
  //   return res.status(200).json({
  //     success: true,
  //     msg: 'You have successfully signed up! Now you should be able to log in',
  //     userSessionId: userData._id
  //   });
  //
  // })(req, res, next);
};

// signin page
/*exports.signin = function(req, res) {

  logger.log({
    level: 'debug',
    message: 'Redirect to login page',
    timestamp: (new Date()).toUTCString(),
    label: { url: getRequestURL(req) }
  });

  res.send({ succes: true, msg: "Signin page" });
};*/

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
