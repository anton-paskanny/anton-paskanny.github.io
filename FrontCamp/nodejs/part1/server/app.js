var express = require("express");
var path = require("path");
var app = express();

// Aps's routes
var index_router = require('./routes/index.js');
var blogs_router = require('./routes/blogs.js');
var sources_router = require('./routes/sources.js');

const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use('/', index_router);
app.use('/api/blogs', blogs_router);
app.use('/api/sources', sources_router);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
