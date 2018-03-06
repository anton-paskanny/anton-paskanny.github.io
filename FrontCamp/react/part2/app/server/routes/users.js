var express = require("express");
var passport = require("passport");
var usersApiController = require("../controllers/usersApiController.js");

var router = express.Router();

// make signup action
router.post(
  '/signup',
  passport.authenticate('signup'),
  usersApiController.doSignup
);

// make signin action
router.post(
  '/signin',
  passport.authenticate('signin'),
  usersApiController.doSignIn
);

// make logout action
router.get('/logout', usersApiController.doLogOut);

module.exports = router;
