var express = require("express");
var path = require("path");
var mongoose = require("mongoose");
var passport = require("passport");
var session = require("express-session");
var LocalStrategy = require("passport-local").Strategy;

var config = require("./config.js");

// App's routes
var blogs_router = require('./routes/blogs.js');
var users_router = require('./routes/users.js');
var index_router = require('./routes/index.js');

var app = express();

app.use(express.static('dist'));

// MongoDB connection
mongoose.connect(`mongodb://${config.db.host}/${config.db.name}`);
var db = mongoose.connection;

db.on('error',  console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() { console.log('Connection was established!'); });

// Configure template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Configure passport
app.use(session({
  secret: 'butthead',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Initialize passport
var initPassport = require("./passport/init.js");
initPassport(passport);

// Enable taking data from req.body
app.use(express.json());

// Add routes to app
app.use('/', index_router);
app.use('/users', users_router);
app.use('/api/blogs', blogs_router);

// Handler for errors
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

  res.status(err.status || 500).send({ message: err.message });
});

app.listen(config.port, () => console.log(`Server is listening on port ${config.port}`));
