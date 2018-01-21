"use strict";

const Model = require("../models/unit.model");
const Router = require("koa-router");

async function getAll(ctx, next) {
  ctx.body = await Model.find({});
}

const router = new Router();
router.get("/units/all", getAll);

module.exports.router = router;
