var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  author: String,
  title: String,
  date: Date,
  body: String
});

var Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
