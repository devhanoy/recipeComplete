'use strict'

const dao = require('../dao/recipeDao')
const send = require('koa-send')
const Router = require('koa-router')

function *getAll () {
  this.body = yield dao.findAll()
}

function *home (next) {
  yield this.render('index2', { title: 'Recettes'})
};

const router = new Router()
router.get('/', home)
router.get('/all', getAll)

module.exports.router = router
