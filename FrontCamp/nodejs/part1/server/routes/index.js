var express = require("express");

var router = express.Router();

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', function(req, res) {
  res.render('index');
});

router.use(function(req, res, next) {
  res.status(404).render('error', {
    message: "Page wasn't found"
  });
});

module.exports = router;
