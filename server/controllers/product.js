'use strict'

const Model = require('../models/product').Product
const Router = require('koa-router')
const parser = require('co-body')

function *getAll () {
  this.body = yield Model.find({})
}

function *getById () {
  const productId = this.params.id
  this.body = yield Model.findById(productId)
}

function *delById () {
  const productId = this.params.id
  this.body = yield Model.findByIdAndRemove(productId)
}

function *add () {
  const body = yield parser.form(this.request)
  let newProduct = new Model(body)
  yield newProduct.save()
  this.body = newProduct
}

const router = new Router()
router.get('/product/all', getAll)
router.del('/product/:id', delById)
router.get('/product/:id', getById)
router.post('/product', add)

module.exports.router = router
