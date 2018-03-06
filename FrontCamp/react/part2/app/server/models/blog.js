var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  author: String,
  text: String
});

var Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
