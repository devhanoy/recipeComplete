'use strict'

const connection = require('./baseConnection')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const crypto = require('crypto-promise')
const nodeCrypto = require('crypto')
const logger = require('../logger').logger

const bytesSize = 32
// const hash = crypto.createHash("sha512")

const userSchema = new Schema({
  username: String,
  password: String,
  salt: String
})

const User = mongoose.model('Users', userSchema)

function hashWithSalt (password, salt) {
  let hm = nodeCrypto.createHmac('sha512', salt)
  hm.update(password, 'utf8')
  return hm.digest().toString('hex')
}

function verify (password) {
  return function (user) {
    if (!user) {
      return false
    }
    const hPassword = hashWithSalt(password, user.salt)
    return hPassword === user.password
  }
}

const checkUser = function (username, password) {
  return connection
    .connect()
    .then(() => User.findOne({username: username}))
    .then(verify(password))
    .catch(err => {
      logger.log('error', 'fail to log user', err)
      return false
    })
}

const insert = function (username, password) {
  let salt
  return crypto.randomBytes(bytesSize)
      .then(bytes => {
        salt = bytes.toString('hex')
        const p = hashWithSalt(password, salt)
        const nUser = new User({
          username: username,
          password: p,
          salt: salt
        })
        return nUser.save()
      })
      .catch(err => {
        logger.log('error', 'fail to insert new user', err)
      })
}

module.exports.checkUser = checkUser
module.exports.insert = insert
