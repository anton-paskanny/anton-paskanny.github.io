var logger = require('../logger');
var getRequestURL = require('../utils/parseUrl.js');


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
