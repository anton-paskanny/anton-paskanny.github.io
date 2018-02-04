var fetch = require('node-fetch');
var logger = require('../logger');
var getRequestURL = require('../utils/parseUrl.js');
var configAPI = require('../../configs/configAPI.js');


// get top headline news url
const getTopHeadlinesURL = (sources) => {
  const sourcesList = sources && sources !== 'undefined' ? sources : configAPI.defaultSources.join(',');
  return `${configAPI.urlPrefix}/${configAPI.topHeadlinesParam}?sources=${sourcesList}&apiKey=${configAPI.apiKey}`;
}

exports.get_blogs = function(req, res) {
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
};

exports.get_specific_blog = function(req, res) {
  logger.log({
    level: 'debug',
    message: 'Get specific blog by id',
    timestamp: (new Date()).toUTCString(),
    label: { id: req.params.id, url: getRequestURL(req) }
  });

  res.send({
    msg: 'You are trying to get blog by id',
    id: req.params.id
  });
}

exports.create_blog = function(req, res) {
  logger.log({
    level: 'debug',
    message: 'Add new blog',
    timestamp: (new Date()).toUTCString(),
    label: { body: req.body, url: getRequestURL(req) }
  });

  res.send('You are trying to add new blog');
};

exports.update_specific_blog = function(req, res) {
  logger.log({
    level: 'debug',
    message: 'Update specific blog by id',
    timestamp: (new Date()).toUTCString(),
    label: { id: req.params.id, body: req.body, url: getRequestURL(req) }
  });

  res.send({
    msg: 'You are trying to udapte blog by id',
    id: req.params.id
  });
}

exports.delete_specific_blog = function(req, res) {
  logger.log({
    level: 'debug',
    message: 'Delete blog by id',
    timestamp: (new Date()).toUTCString(),
    label: { id: req.params.id, url: getRequestURL(req) }
  });

  res.send({
    msg: 'You are trying to delete blog by id',
    id: req.params.id
  });
}
