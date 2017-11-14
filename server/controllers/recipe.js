'use strict'

const model = require('../models/recipe')
const Router = require('koa-router')

async function getAll (ctx, next) {
  ctx.body = await model.find({})
}

async function home (ctx, next) {
  console.log('in home')
  console.log(ctx.render)
  // await ctx.render('index2', { title: 'Recettes' })
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
