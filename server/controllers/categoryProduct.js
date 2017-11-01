'use strict'

const Model = require('../models/product').CategoryProduct
const Router = require('koa-router')
const parser = require('co-body')

function *getAll () {
  this.body = yield Model.find({})
}

function *getById () {
  const categoryProductId = this.params.id
  this.body = yield Model.findById(categoryProductId)
}

function *delById () {
  const categoryProductId = this.params.id
  this.body = yield Model.findByIdAndRemove(categoryProductId)
  console.log(this.body)
}

function *add () {
  const body = yield parser.form(this.request)
  const categoryproduct = body.categoryproduct
  let newCategory = new Model({name: categoryproduct})
  yield newCategory.save()
  this.body = newCategory
}

const router = new Router()
router.get('/categoryProduct/all', getAll)
router.del('/categoryProduct/:id', delById)
router.get('/categoryProduct/:id', getById)
router.post('/categoryProduct/add', add)

module.exports.router = router
