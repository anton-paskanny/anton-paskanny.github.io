var express = require("express");
var path = require("path");
var app = express();

// Aps's routes
var router = require('./routes');

const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use('/', router);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
