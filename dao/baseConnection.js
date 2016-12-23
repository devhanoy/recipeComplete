'use strict'

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const config = require('config')
const logger = require('../logger').logger

// Connection URL
const url = config.get('mainBase').name

const db = mongoose.connection

db.on('error', err => logger.log('error', 'connection error', err))

var openConnection

module.exports.connect = () => {
  if (!openConnection) {
    openConnection = Promise.resolve(mongoose.connect(url))
  }
  return openConnection
}

module.exports.disconnect = () => {
  let result = null
  if (openConnection) {
    result = mongoose.disconnect()
  }
  openConnection = null
  return Promise.resolve(result)
}
