const recipes = require('../controllers/recipe')
const product = require('../controllers/product')
const categoryProduct = require('../controllers/categoryProduct')
const login = require('../controllers/login')
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
router.use('/recipes', product.router.routes())
router.use('/recipes', categoryProduct.router.routes())
router.get('/recipes/:action', home)

const mainRoutes = ['categories', 'addProduct', 'products', 'addRecipe']

function *home (next) {
  const action = this.params.action
  if (mainRoutes.some(ac => ac === action)) {
    yield this.render('index2', { title: 'Recettes' })
  }
}

module.exports.router = router
