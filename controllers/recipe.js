'use strict'

const model = require('../models/recipe')
const Router = require('koa-router')

function *getAll () {
  this.body = yield model.find({})
}

function *home (next) {
  yield this.render('index2', { title: 'Recettes' })
};

function *getById () {
  const recipeId = this.params.id
  this.body = yield model.findById(recipeId)
}

function *delById () {
  const recipeId = this.params.id
  this.body  = yield model.findByIdAndRemove(recipeId)
}

const router = new Router()
router.get('/', home)
router.get('/all', getAll)
router.del('/recipe/:id', delById)
router.get('/recipe/:id', getById)

module.exports.router = router
