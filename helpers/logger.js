const winston = require('winston')
const path = require('path')
const config = require('config')

const logFilePath = [__dirname, '..', ...config.get('logFilePath')]

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: path.join(...logFilePath) })
  ]
})

module.exports.logger = logger
