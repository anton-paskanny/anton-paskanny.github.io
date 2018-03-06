var logger = require('../logger');
var getRequestURL = require('../utils/parseUrl.js');
var Blog = require('../models/blog.js');

exports.getBlogs = function(req, res, next) {
  Blog.find({}, function(err, blogs) {
    if (err) throw next(err);

    logger.log({
      level: 'debug',
      message: 'Get blogs',
      timestamp: (new Date()).toUTCString(),
      label: { params: req.query, url: getRequestURL(req) }
    });

    res.send({blogs: blogs});
  });
};

exports.createBlog = function(req, res, next) {
  var blog = new Blog({
    author: req.body.author,
    text: req.body.text
  });

  blog.save(function(err, result) {
    if (err) throw next(err);

    logger.log({
      level: 'debug',
      message: 'Add new blog',
      timestamp: (new Date()).toUTCString(),
      label: { author: req.body.author, text: req.body.text, url: getRequestURL(req) }
    });

    res.send({msg: 'New blog was added', blog: result});
  });
};

exports.deleteBlog = function(req, res, next) {
  logger.log({
    level: 'debug',
    message: 'Delete blog by id',
    timestamp: (new Date()).toUTCString(),
    label: { id: req.params.id, url: getRequestURL(req) }
  });

  Blog.findById(decodeURI(req.params.id), function(err, blog) {
    if (err) throw next(err);

    blog.remove(function(err) {
      if (err) throw next(err);

      res.send({msg: 'Blog was deleted'});
    });
  });
}
