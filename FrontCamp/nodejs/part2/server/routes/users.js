var express = require("express");
var passport = require("passport");
var usersApiController = require("../controllers/usersApiController.js");

var router = express.Router();

// get index page
router.get('/', usersApiController.home);

// get signup page
router.get('/signup', usersApiController.signup);

// make signup action
router.post(
  '/signup',
  passport.authenticate('signup'),
  usersApiController.doSignup
);

// get signin page
router.get('/signin', usersApiController.signin);

// make signin action
router.post(
  '/signin',
  passport.authenticate('signin'),
  usersApiController.doSignIn
);

module.exports = router;
