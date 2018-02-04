var express = require("express");
var blogsApiController = require('../controllers/blogsApiController.js');

var router = express.Router();

router.get('/', blogsApiController.get_blogs);

router.get('/:id', blogsApiController.get_specific_blog);

router.post('/', blogsApiController.create_blog);

router.put('/:id', blogsApiController.update_specific_blog);

router.delete('/:id', blogsApiController.delete_specific_blog);

module.exports = router;
