'use strict'

const dao = require('../models/user')
const Router = require('koa-router')
const logger = require('../helpers/logger').logger
const parser = require('co-body')

function* getLogin () {
  yield this.render('login', { title: 'Login' })
}

function* postLogin () {
  let body = yield parser.form(this.request)

  let success = yield dao.checkUser(body.login, body.password)

  const verb = success ? 'successed' : 'failed'
  logger.log('info', `User ${body.login} ${verb} to log in`)

  yield this.render('login', { title: 'Login' })
}

function* getSignin () {
  yield this.render('signin', { title: 'Inscription' })
}

function* postSignin () {
  let body = yield parser.form(this.request)

  let success = yield dao.insert(body.login, body.password)
  if (success) {
    logger.log('info', `User ${body.login} has subscribed`)
  }

  yield this.render('signin', { title: 'Inscription' })
}

const router = new Router()
router.get('/login', getLogin)
router.post('/login', postLogin)
router.get('/signin', getSignin)
router.post('/signin', postSignin)

module.exports.router = router
