var express = require("express");
var path = require("path");
var mongoose = require("mongoose");
var config = require("./config.js");
var blogs_router = require('./routes/blogs.js');
var app = express();

mongoose.connect(`mongodb://${config.db.host}/${config.db.name}`);

var db = mongoose.connection;

db.on('error',  console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Connection was established!');
});

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use('/api/blogs', blogs_router);
app.use(function(req, res, next) {
  var err = new Error('Page wasn\'t found');
  err.status = 404;
  next(err);
});
app.use(function(err, req, res, next) {
  
  if (err.status === 400) {
    res.render('error', {
      message: err.message
    });
  }
  
  res.status(err.status || 500).send({ msg: err.message });
});

app.listen(config.port, () => console.log(`Server is listening on port ${config.port}`));
