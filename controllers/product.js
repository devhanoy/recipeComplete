'use strict'

const model = require('../models/product').Product
const Router = require('koa-router')

function *getAll () {
  this.body = yield model.find({})
}

function *getById () {
  const productId = this.params.id
  this.body = yield model.findById(productId)
}

function *delById () {
  const productId = this.params.id
  this.body  = yield model.findByIdAndRemove(productId)
}

const router = new Router()
router.get('/all', getAll)
router.del('/product/:id', delById)
router.get('/product/:id', getById)

module.exports.router = router
