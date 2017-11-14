'use strict'

const dao = require('../models/user')
const Router = require('koa-router')
const logger = require('../helpers/logger').logger
const parser = require('co-body')

async function getLogin (ctx, next) {
  await this.render('login', { title: 'Login' })
}

async function postLogin (ctx, next) {
  let body = parser.form(ctx.request)

  let success = await dao.checkUser(body.login, body.password)

  const verb = success ? 'successed' : 'failed'
  logger.log('info', `User ${body.login} ${verb} to log in`)

  await this.render('login', { title: 'Login' })
}

async function getSignin (ctx, next) {
  await this.render('signin', { title: 'Inscription' })
}

async function postSignin (ctx, next) {
  let body = parser.form(ctx.request)

  let success = await dao.insert(body.login, body.password)
  if (success) {
    logger.log('info', `User ${body.login} has subscribed`)
  }

  await this.render('signin', { title: 'Inscription' })
}

const router = new Router()
router.get('/login', getLogin)
router.post('/login', postLogin)
router.get('/signin', getSignin)
router.post('/signin', postSignin)

module.exports.router = router
