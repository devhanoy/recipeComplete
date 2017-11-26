const recipes = require('../controllers/recipe')
const product = require('../controllers/product')
const categoryProduct = require('../controllers/categoryProduct')
const unit = require('../controllers/unit.controller')
const login = require('../controllers/login')
const Router = require('koa-router')

const router = new Router()

router.use(login.router.routes())
router.use('/recipes', recipes.router.routes())
router.use('/recipes', product.router.routes())
router.use('/recipes', categoryProduct.router.routes())
router.use('/recipes', unit.router().routes())

module.exports.router = router
