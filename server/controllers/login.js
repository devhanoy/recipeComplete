"use strict";

const dao = require("../models/user");
const Router = require("koa-router");
const logger = require("../helpers/logger").logger;
const parser = require("co-body");

const { createToken } = require("../helpers/auth.service");

async function postLogin(ctx, next) {
  const { username, password } = ctx.request.body;

  // const success = await dao.checkUser(username, password);

  const success = username === "admin" && password === "admin";

  const verb = success ? "successed" : "failed";
  logger.log("info", `User ${username} ${verb} to log in`);

  ctx.response.status = success ? 202 : 401;
  if (success) {
    const token = createToken({
      authorized: true,
      username
    });
    ctx.body = { token };
  } else {
    ctx.body = "Fuck!";
  }

  // await this.render("login", { title: "Login" });
}

async function getSignin(ctx, next) {
  await this.render("signin", { title: "Inscription" });
}

async function postSignin(ctx, next) {
  let body = parser.form(ctx.request);

  let success = await dao.insert(body.login, body.password);
  if (success) {
    logger.log("info", `User ${body.login} has subscribed`);
  }

  await this.render("signin", { title: "Inscription" });
}

const router = new Router();
router.post("/login", postLogin);
router.get("/signin", getSignin);
router.post("/signin", postSignin);

module.exports.router = router;
