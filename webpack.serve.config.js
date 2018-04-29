const merge = require("webpack-merge");

const proxy = require("http-proxy-middleware");
const convert = require("koa-connect");
const Router = require("koa-router");

const config = require("./webpack.config");

const router = new Router();

const proxyOptions = {
  target: "http://localhost:3000",
  changeOrigin: true
  // ... see: https://github.com/chimurai/http-proxy-middleware#options
};

router.all("*", convert(proxy(proxyOptions)));

module.exports = merge(config, {
  name: "serve",
  serve: {
    add: (app, middleware, options) => {
      // since we're manipulating the order of middleware added, we need to handle
      // adding these two internal middleware functions.
      middleware.webpack();
      middleware.content();

      // router *must* be the last middleware added
      app.use(router.routes());
    }
  }
});
