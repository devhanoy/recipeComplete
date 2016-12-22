'use strict'

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const config = require('config')

// console.log(config)

// Connection URL
const url = config.get('mainBase').name
// 'mongodb://localhost:27017/myproject';

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

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
