var express = require('express');
var router = express.Router();

import handleInitialRender from "../utils/ssr";

router.get('*', function(req, res, next) {
  handleInitialRender(req, res, next);
});

module.exports = router;
