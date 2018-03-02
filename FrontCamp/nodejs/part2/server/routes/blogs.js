var express = require("express");
var blogsApiController = require('../controllers/blogsApiController.js');
var isAuthenticated = require('../utils/authChecker.js');

var router = express.Router();

router.get('/', isAuthenticated, blogsApiController.get_blogs);

router.get('/:id', isAuthenticated, blogsApiController.get_specific_blog);

router.post('/', isAuthenticated, blogsApiController.create_blog);

router.put('/:id', isAuthenticated, blogsApiController.update_specific_blog);

router.delete('/:id', isAuthenticated,  blogsApiController.delete_specific_blog);

module.exports = router;
