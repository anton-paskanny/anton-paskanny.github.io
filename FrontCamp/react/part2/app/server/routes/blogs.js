var express = require("express");
var blogsApiController = require('../controllers/blogsApiController.js');
var isAuthenticated = require('../passport/authChecker.js');

var router = express.Router();

router.get('/', isAuthenticated, blogsApiController.getBlogs);

router.post('/', isAuthenticated, blogsApiController.createBlog);

router.delete('/:id', isAuthenticated, blogsApiController.deleteBlog);

module.exports = router;
