'use strict'

const compress = require('koa-compress')
const logger = require('koa-logger')
const serve = require('koa-static')
const router = require('./routes').router
const koa = require('koa')
const helmet = require('koa-helmet')
const session = require('koa-session')
const hbs = require('koa-hbs')
const config = require('config')

const path = require('path')
const app = module.exports = koa()

// necessary for session
app.keys = config.get('appsKeys')

// session
app.use(session(config.get('sessionConfig'), app))

// Logger
app.use(logger())

// Security
app.use(helmet())

// koa-hbs is middleware. `use` it before you want to render a view
app.use(hbs.middleware({
  viewPath: path.join(__dirname, 'views'),
  partialsPath: path.join(__dirname, 'views', 'partials'),
  defaultLayout: 'default',
  layoutsPath: path.join(__dirname, 'views', 'layouts')
}))

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
