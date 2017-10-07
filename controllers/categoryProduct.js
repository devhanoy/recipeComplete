'use strict'

const model = require('../models/product').CategoryProduct
const Router = require('koa-router')
const parser = require('co-body')

function *getAll () {
  this.body = yield model.find({})
}

function *getById () {
  const categoryProductId = this.params.id
  this.body = yield model.findById(categoryProductId)
}

function *delById () {
  const categoryProductId = this.params.id
  this.body  = yield model.findByIdAndRemove(categoryProductId)
}

function *add () {
    const body = yield parser.form(this.request)
    const categoryproduct = body.categoryproduct;
    let newCategory = new model({name: categoryproduct});
    yield newCategory.save();
    this.body = newCategory;
}



const router = new Router()
router.get('/categoryProduct/all', getAll)
router.del('/categoryProduct/:id', delById)
router.get('/categoryProduct/:id', getById)
router.post('/categoryProduct/add', add)

module.exports.router = router
