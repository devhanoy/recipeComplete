'use strict'

const Model = require('../models/recipe')
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

async function add (ctx, next) {
  const body = await parser.json(ctx.req)
  const newRecipe = new Model(body)
  await newRecipe.save()
  this.body = newRecipe
}

async function homeSpecific (ctx, next) {
  const action = ctx.query.action
  console.log(ctx.query);
  console.log(action);
  if (mainRoutes.some(ac => ac === action)) {
    await home(ctx, next)
  } else {
    await next()
  }
}

const mainRoutes = ['categories', 'addProduct', 'products', 'addRecipe']

const router = new Router()
router.get('/', home)
router.get('/all', getAll)
router.del('/recipe/:id', delById)
router.get('/recipe/:id', getById)
router.post('/recipe/add', add)
router.get('/:action', homeSpecific)

module.exports.router = router
