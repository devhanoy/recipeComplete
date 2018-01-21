"use strict";

const compress = require("koa-compress");
const logger = require("koa-logger");
const serve = require("koa-static");
const router = require("./helpers/routes").router;
const Koa = require("koa");
const koaBody = require("koa-body");
const helmet = require("koa-helmet");
const session = require("koa-session");
const config = require("config");
const myLogger = require("./helpers/logger").logger;
const mongoConn = require("./helpers/mongoConnection");

const path = require("path");
const app = new Koa();

mongoConn.connect();

// necessary for session
app.keys = config.get("appsKeys");

// session
// app.use(session(config.get('sessionConfig'), app))
app.use(session(app));

// Logger
app.use(logger());

// Security
app.use(helmet());

app.use(
  koaBody({
    multipart: false,
    urlencoded: false,
    text: false,
    json: true,
    formidable: false
  })
);

app.use(router.routes()).use(router.allowedMethods());

// Serve static files
app.use(serve(path.join(__dirname, "..", "public")));

// Compress

app.use(compress());

module.exports = app.listen(3000);
myLogger.log("info", "listening on port 3000");
