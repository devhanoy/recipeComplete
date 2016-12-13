'use strict';
// const messages = require('./controllers/messages');
const recipes = require('./controllers/recipe');
const login = require('./controllers/login');
const compress = require('koa-compress');
const logger = require('koa-logger');
const serve = require('koa-static');
const Router = require('koa-router');
const koa = require('koa');
const bodyparser = require('koa-body-parser')
const helmet = require('koa-helmet')


const path = require('path');
const app = module.exports = koa();



// Logger
app.use(logger());

// Security
// app.use(helmet())

// retrieve the data passed in the requests
app.use(bodyparser());

// app.use(route.get('/', messages.home));
// app.use(route.get('/messages', messages.list));
// app.use(route.get('/messages/:id', messages.fetch));
// app.use(route.post('/messages', messages.create));
// app.use(route.get('/async', messages.delay));
// app.use(route.get('/promise', messages.promise));

// app.use(route.get('/recipes', recipes.home));

var router = new Router()
router.get('/recipes', recipes.home)
router.get('/recipes/all', recipes.getAll)

// router.get('/login', login.getLogin)
// router.post('/login', login.postLogin)
// router.get('/signin', login.getSignin)
// router.post('/signin', login.postSignin)

router.use(login.router.routes())

app.use(router.routes())
    .use(router.allowedMethods())

// Serve static files
app.use(serve(path.join(__dirname, 'public')));

// Compress

app.use(compress());

// process.on('beforeExit', (code) => {
//   console.log('bye!')
//   console.log(`Process exits with status ${code}`)
//   connection.disconnect();
// })


if (!module.parent) {
  app.listen(3000);
  console.log('listening on port 3000');
}
