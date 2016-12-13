const winston = require('winston')
const path = require('path')

 const logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)(),
      new (winston.transports.File)({ filename: 'somefile.log' })
    ]
  });

module.exports.logger = logger