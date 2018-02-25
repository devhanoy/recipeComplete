"use strict";

const Model = require("../models/recipe");
const productModel = require("../models/product").Product;
const unitModel = require("../models/unit.model");
const Router = require("koa-router");
const send = require("koa-send");
const path = require("path");

async function getAll(ctx, next) {
  ctx.body = await Model.find({}, { title: true });
}

async function home(ctx, next) {
  await send(ctx, path.join("views", "pages", "index.html"), {
    root: path.join(__dirname, "..")
  });
}

async function getById(ctx, next) {
  const recipeId = ctx.params.id;
  const recipe = await Model.findById(recipeId);
  const productsIds = recipe.products.map(p => p.productId);
  const unitIds = recipe.products.map(p => p.unitId);

  const [products, units] = await Promise.all([
    productModel.find({ _id: { $in: productsIds } }),
    unitModel.find({ _id: { $in: unitIds } })
  ]);

  const filledProducts = recipe.products.map(p => {
    const product = products.find(mp => p.productId.equals(mp._id));
    const unit = units.find(u => p.unitId.equals(u._id));
    return {
      product,
      quantity: p.quantity,
      unit
    };
  });
  ctx.body = {
    title: recipe.title,
    steps: recipe.steps,
    products: filledProducts
  };
}

async function delById(ctx, next) {
  const recipeId = ctx.params.id;
  ctx.body = await Model.findByIdAndRemove(recipeId);
}

async function add(ctx, next) {
  const body = ctx.request.body;
  const newRecipe = new Model(body);
  await newRecipe.save();
  ctx.body = newRecipe;
}

const mainRoutes = [
  "categories",
  "addProduct",
  "products",
  "addRecipe",
  "recipesList",
  "recipeDetail"
];
async function homeSpecific(ctx, next) {
  const action = ctx.params.action;
  if (mainRoutes.some(ac => ac === action)) {
    await home(ctx, next);
  } else {
    await next();
  }
}

const router = new Router();
router.get("/all", getAll);
router.del("/recipe/:id", delById);
router.get("/recipe/:id", getById);
router.post("/recipe/add", add);
router.get("/", home);
router.get("/:action", homeSpecific);
router.get("/:action/:id", homeSpecific);

module.exports.router = router;
