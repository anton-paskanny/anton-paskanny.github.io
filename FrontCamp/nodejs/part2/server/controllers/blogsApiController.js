var logger = require('../logger');
var getRequestURL = require('../utils/parseUrl.js');
var Blog = require('../models/blog.js');

exports.get_blogs = function(req, res, next) {
  Blog.find({}, function(err, blogs) {
    if (err) throw next(err);
    
    logger.log({
      level: 'debug',
      message: 'Get blogs',
      timestamp: (new Date()).toUTCString(),
      label: { params: req.query, url: getRequestURL(req) }
    });
  
    res.send({blogs: blogs});
  })
};

exports.get_specific_blog = function(req, res, next) {
  Blog.findById(req.params.id, function(err, blog) {
    if (err) throw next(err);
    
    logger.log({
      level: 'debug',
      message: 'Get specific blog by id',
      timestamp: (new Date()).toUTCString(),
      label: { id: req.params.id, url: getRequestURL(req) }
    });

    res.send({
      blog: blog
    })
  });
}

exports.create_blog = function(req, res, next) {
  var blog = new Blog({
    author: req.body.author,
    title: req.body.title,
    date: req.body.date,
    body: req.body.body
  });

  blog.save(function(err) {
    if (err) throw next(err);
    
    logger.log({
      level: 'debug',
      message: 'Add new blog',
      timestamp: (new Date()).toUTCString(),
      label: { title: req.body.title, body: req.body, url: getRequestURL(req) }
    });
    
    res.send({msg: 'New blog was added'});
  });
};

exports.update_specific_blog = function(req, res, next) {  
  Blog.findById(req.params.id, function(err, blog) {
    if (err) throw next(err);
    
    blog.author = req.body.author || blog.author;
    blog.title = req.body.title || blog.title;
    blog.date = req.body.date || blog.date;
    blog.body = req.body.body || blog.body;
    
    blog.save(function(err, blog) {
      if (err) throw next(err);
      
      logger.log({
        level: 'debug',
        message: 'Update specific blog by id',
        timestamp: (new Date()).toUTCString(),
        label: { id: req.params.id, body: req.body, url: getRequestURL(req) }
      });
      
      res.send({
        msg: 'Blog was updated',
        blog: blog
      });
    })
  });
}

exports.delete_specific_blog = function(req, res, next) {
  logger.log({
    level: 'debug',
    message: 'Delete blog by id',
    timestamp: (new Date()).toUTCString(),
    label: { id: req.params.id, url: getRequestURL(req) }
  });

  Blog.findById(req.params.id, function(err, blog) {
    if (err) throw next(err);

    blog.remove(function(err) {
      if (err) throw next(err);

      res.send({
        msg: 'Blog was deleted',
        id: req.params.id
      });
    });
  });
}
