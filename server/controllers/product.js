'use strict'

const Model = require('../models/product').Product
const Router = require('koa-router')

async function getAll (ctx, next) {
  ctx.body = await Model.find({})
}

async function getById (ctx, next) {
  const productId = ctx.query.id
  ctx.body = await Model.findById(productId)
}

async function delById (ctx, next) {
  const productId = ctx.query.id
  ctx.body = await Model.findByIdAndRemove(productId)
}

async function add (ctx, next) {
  const body = ctx.request.body
  const newProduct = new Model(body)
  await newProduct.save()
  ctx.body = newProduct
}

const router = new Router()
router.get('/product/all', getAll)
router.del('/product/:id', delById)
router.get('/product/:id', getById)
router.post('/product', add)

module.exports.router = router
