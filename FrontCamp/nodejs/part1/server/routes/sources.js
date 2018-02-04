var express = require("express");
var sourcesApiController = require('../controllers/sourcesApiController.js');

var router = express.Router();

router.get('/', sourcesApiController.get_sources);

module.exports = router;
