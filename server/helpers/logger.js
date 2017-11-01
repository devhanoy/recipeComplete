const winston = require('winston')
const path = require('path')
const config = require('config')
const fs = require('fs')
const { promisify } = require('util')

const accessAsync = promisify(fs.access)

const logFilePath = [__dirname, '..', ...config.get('logFilePath')]

const dirLog = path.join(...logFilePath.slice(0, -1))

ensureFile(dirLog)

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: path.join(...logFilePath) })
  ]
})

async function ensureFile (checkFile) {
  try {
    await accessAsync(dirLog)
  } catch (err) {
    const mkDirAsync = promisify(fs.mkdir)
    await mkDirAsync(dirLog)
  }
}

module.exports.logger = logger
