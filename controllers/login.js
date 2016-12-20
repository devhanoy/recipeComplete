const dao = require('../dao/user');
const views = require('co-views');
const parse = require('co-body');
const send = require('koa-send');
const path = require('path');
const Router = require('koa-router')
const logger = require('../logger').logger
const parser = require('co-body')

function* getLogin(){
    const pathToIndex = path.join(__dirname, '..','views')
    yield send(this, 'login.html', {hidden : true, root: pathToIndex})
}

function* postLogin(){
    let body = yield parse.form(this.request)

    let success = yield dao.checkUser(body.login, body.password)

    const pathToIndex = path.join(__dirname, '..','views')
    yield send(this, 'login.html', {hidden : true, root: pathToIndex})
}

function* getSignin(){
    const pathToIndex = path.join(__dirname, '..','views')
    yield send(this, 'signin.html', {hidden : true, root: pathToIndex})
}

function* postSignin(){
    let body = yield parse.form(this.request)

    let success = yield dao.insert(body.login, pasbody.password)

    const pathToIndex = path.join(__dirname, '..','views')
    yield send(this, 'signin.html', {hidden : true, root: pathToIndex})
}

const router = new Router();
router.get('/login', getLogin)
router.post('/login', postLogin)
router.get('/signin', getSignin)
router.post('/signin', postSignin)

module.exports.router = router
