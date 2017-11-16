'use strict'

const Model = require('../models/product').CategoryProduct
const Router = require('koa-router')

async function getAll (ctx, next) {
  ctx.body = await Model.find({})
}

async function getById (ctx, next) {
  const categoryProductId = ctx.query.id
  ctx.body = await Model.findById(categoryProductId)
}

async function delById (ctx, next) {
  const categoryProductId = ctx.query.id
  ctx.body = await Model.findByIdAndRemove(categoryProductId)
}

async function add (ctx, next) {
  const body = ctx.request.body
  const categoryproduct = body.categoryproduct
  const newCategory = new Model({name: categoryproduct})
  await newCategory.save()
  ctx.body = newCategory
}

const router = new Router()
router.get('/categoryProduct/all', getAll)
router.del('/categoryProduct/:id', delById)
router.get('/categoryProduct/:id', getById)
router.post('/categoryProduct/add', add)

module.exports.router = router
