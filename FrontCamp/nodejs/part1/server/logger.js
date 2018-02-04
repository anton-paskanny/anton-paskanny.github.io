const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true
    }),
    new winston.transports.File({
      filename: 'debug.log',
      level: 'debug',
      handleExceptions: true
    })
  ]
});

module.exports = logger;
