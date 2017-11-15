'use strict'

const model = require('../models/recipe')
const Router = require('koa-router')
const send = require('koa-send')
const path = require('path')

async function getAll (ctx, next) {
  ctx.body = await model.find({})
}

async function home (ctx, next) {
  await send(ctx, path.join( 'views','pages', 'index.html' ), { root: path.join(__dirname, '..')  })
}

async function getById (ctx, next) {
  const recipeId = ctx.query.id
  ctx.body = await model.findById(recipeId)
}

async function delById (ctx, next) {
  const recipeId = ctx.query.id
  ctx.body = await model.findByIdAndRemove(recipeId)
}

const router = new Router()
router.get('/', home)
router.get('/all', getAll)
router.del('/recipe/:id', delById)
router.get('/recipe/:id', getById)

module.exports.router = router
