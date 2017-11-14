'use strict'

const compress = require('koa-compress')
const logger = require('koa-logger')
const serve = require('koa-static')
const router = require('./helpers/routes').router
const Koa = require('koa')
const helmet = require('koa-helmet')
const session = require('koa-session')
const hbs = require('koa-hbs')
const handlebars = require('koa-handlebars')
const config = require('config')
const myLogger = require('./helpers/logger').logger
const mongoConn = require('./helpers/mongoConnection')

const path = require('path')
const app = module.exports = new Koa()

mongoConn.connect()

// necessary for session
app.keys = config.get('appsKeys')

// session
// app.use(session(config.get('sessionConfig'), app))
app.use(session(app))

// Logger
app.use(logger())

// Security
app.use(helmet())

// koa-hbs is middleware. `use` it before you want to render a view
app.use(handlebars({
  viewPath: path.join(__dirname, 'views'),
  partialsPath: path.join(__dirname, 'views', 'partials'),
  defaultLayout: 'default',
  layoutsPath: path.join(__dirname, 'views', 'layouts')
}))

app.use(router.routes())
    .use(router.allowedMethods())

// Serve static files
app.use(serve(path.join(__dirname, '..', 'public')))

// Compress

app.use(compress())

app.use(async function () {
  console.log('in second use')
  await this.render('index2', { title: 'Recettes' })
})

// async function home (ctx, next) {
//   console.log('in home')
//   console.log(ctx.render)
//   await ctx.render('index2', { title: 'Recettes' })
// };

// process.on('beforeExit', (code) => {
//   console.log('bye!')
//   console.log(`Process exits with status ${code}`)
//   connection.disconnect();
// })

if (!module.parent) {
  app.listen(3000)
  myLogger.log('info', 'listening on port 3000')
}
