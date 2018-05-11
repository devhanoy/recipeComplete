const recipes = require("../controllers/recipe");
const product = require("../controllers/product");
const categoryProduct = require("../controllers/categoryProduct");
const unit = require("../controllers/unit.controller");
const login = require("../controllers/login");
const Router = require("koa-router");
const send = require("koa-send");
const path = require("path");
const { verifyUser } = require("./auth.service");

const router = new Router();

async function getLogin(ctx, next) {
  await send(ctx, path.join("views", "pages", "login.html"), {
    root: path.join(__dirname, "..")
  });
  // await this.render("login", { title: "Login" });
}

async function home(ctx, next) {
  await send(ctx, path.join("views", "pages", "index.html"), {
    root: path.join(__dirname, "..")
  });
}

//   const mainRoutes = [
//     "categories",
//     "addProduct",
//     "products",
//     "addRecipe",
//     "recipesList",
//     "recipeDetail"
//   ];
//   async function homeSpecific(ctx, next) {
//     const action = ctx.params.action;
//     if (mainRoutes.some(ac => ac === action)) {
//       await home(ctx, next);
//     } else {
//       await next();
//     }
//   }

router.get("/login", getLogin);
router.get("/recipes*", home);
router.use(login.router.routes());

router.use("/api", verifyUser);
router.use("/api/recipes", recipes.router.routes());
router.use("/api/recipes", product.router.routes());
router.use("/api/recipes", categoryProduct.router.routes());
router.use("/api/recipes", unit.router.routes());

module.exports.router = router;
