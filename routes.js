const recipes = require('./controllers/recipe')
const login = require('./controllers/login')
const Router = require('koa-router')

const router = new Router()

// var auth = function *(next) {
//   console.log(this.session)
//   if (!this.session || !this.session.user) {
//     this.response.redirect('/login')
//   }
//    yield next
// }

// router.get('/recipes', /*auth,*/ recipes.home)

router.use(login.router.routes())
router.use('/recipes', recipes.router.routes())

module.exports.router = router
