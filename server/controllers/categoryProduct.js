'use strict'

const Model = require('../models/product').CategoryProduct
const Router = require('koa-router')
const parser = require('co-body')

async function getAll (ctx, next) {
  ctx.body = await Model.find({})
}

async function getById (ctx, next) {
  const categoryProductId = this.query.id
  ctx.body = await Model.findById(categoryProductId)
}

async function delById (ctx, next) {
  const categoryProductId = this.query.id
  ctx.body = await Model.findByIdAndRemove(categoryProductId)
}

async function add (ctx, next) {
  const body = parser.form(ctx.request)
  const categoryproduct = body.categoryproduct
  let newCategory = new Model({name: categoryproduct})
  await newCategory.save()
  ctx.body = newCategory
}

const router = new Router()
router.get('/categoryProduct/all', getAll)
router.del('/categoryProduct/:id', delById)
router.get('/categoryProduct/:id', getById)
router.post('/categoryProduct/add', add)

module.exports.router = router
