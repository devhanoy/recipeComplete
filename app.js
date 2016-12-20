'use strict'
// const messages = require('./controllers/messages');
const recipes = require('./controllers/recipe')
const login = require('./controllers/login')
const compress = require('koa-compress')
const logger = require('koa-logger')
const serve = require('koa-static')
const Router = require('koa-router')
const koa = require('koa')
const helmet = require('koa-helmet')

const path = require('path')
const app = module.exports = koa()

// Logger
app.use(logger())

// Security
app.use(helmet())

var router = new Router()
router.get('/recipes', recipes.home)
router.get('/recipes/all', recipes.getAll)

router.use(login.router.routes())

app.use(router.routes())
    .use(router.allowedMethods())

// Serve static files
app.use(serve(path.join(__dirname, 'public')))

// Compress

app.use(compress())

// process.on('beforeExit', (code) => {
//   console.log('bye!')
//   console.log(`Process exits with status ${code}`)
//   connection.disconnect();
// })

if (!module.parent) {
  app.listen(3000)
  console.log('listening on port 3000')
}
