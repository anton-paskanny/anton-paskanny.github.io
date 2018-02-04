var fetch = require('node-fetch');
var logger = require('../logger');
var getRequestURL = require('../utils/parseUrl.js');
var configAPI = require('../../configs/configAPI.js');


// get sources ulr
const getNewsSourcesURL = () => {
  return `${configAPI.urlPrefix}/${configAPI.sourcesParam}?apiKey=${configAPI.apiKey}`;
}

exports.get_sources = function(req, res) {
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
}
