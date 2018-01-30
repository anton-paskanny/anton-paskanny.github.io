var express = require("express");
var fetch = require('node-fetch');
var logger = require('./logger');
var configAPI = require('./configAPI');

var router = express.Router();

// get top headline news url
const getTopHeadlinesURL = (sources) => {
  const sourcesList = sources ? sources : configAPI.defaultSources.join(',');
  return `${configAPI.urlPrefix}/${configAPI.topHeadlinesParam}?sources=${sourcesList}&apiKey=${configAPI.apiKey}`;
}

// get sources ulr
const getNewsSourcesURL = () => {
  return `${configAPI.urlPrefix}/${configAPI.sourcesParam}?apiKey=${configAPI.apiKey}`;
}

const getRequestURL = (req) => {
  return `${req.protocol}://${req.get('host')}${req.originalUrl}`;
}

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', function(req, res) {
  res.render('index');
  next();
});

router.get('/api/blogs', function(req, res) {
    const url = getTopHeadlinesURL(req.query.sources);

    logger.log({
      level: 'debug',
      message: 'Get blog news',
      timestamp: (new Date()).toUTCString(),
      label: { params: req.query, url: getRequestURL(req) }
    });


    fetch(url).then(data => {
      data.json().then(json => res.send(json));
    });
});

router.get('/api/blogs/:id', function(req, res) {
  logger.log({
    level: 'debug',
    message: 'Get certain blog by id',
    timestamp: (new Date()).toUTCString(),
    label: { id: req.params.id, url: getRequestURL(req) }
  });
  res.send('You are trying to get blog by id')
});

router.post('/api/blogs', function(req, res) {
  logger.log({
    level: 'debug',
    message: 'Add new blog',
    timestamp: (new Date()).toUTCString(),
    label: { body: req.body, url: getRequestURL(req) }
  });
  res.send('You are trying to add new blog');
});

router.put('/api/blogs/:id', function(req, res) {
  logger.log({
    level: 'debug',
    message: 'Update blog by id',
    timestamp: (new Date()).toUTCString(),
    label: { body: req.body, url: getRequestURL(req) }
  });
  res.send('You are trying to udapte blog by id');
});

router.delete('/api/blogs/:id', function(req, res) {
  logger.log({
    level: 'debug',
    message: 'Delete blog by id',
    timestamp: (new Date()).toUTCString(),
    label: { body: req.body, url: getRequestURL(req) }
  });
  res.send('You are trying to delete blog by id');
});

router.get('/api/sources', function(req, res) {
    const url = getNewsSourcesURL();

    logger.log({
      level: 'debug',
      message: 'Get news sources',
      timestamp: (new Date()).toUTCString(),
      label: { url: getRequestURL(req) }
    });

    fetch(url).then(data => {
      data.json().then(json => res.send(json));
    });
});

router.use(function(req, res, next) {
  res.status(404).render('error', {
    message: "Page wasn't found"
  });
});

module.exports = router;
