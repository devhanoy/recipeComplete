const dao = require('../dao/user');
const views = require('co-views');
const parse = require('co-body');
const send = require('koa-send');
const path = require('path');
const Router = require('koa-router')

function* getLogin(){
    const pathToIndex = path.join(__dirname, '..','views')
    yield send(this, 'login.html', {hidden : true, root: pathToIndex})
}

function* postLogin(){
    const pathToIndex = path.join(__dirname, '..','views')

    let username = this.request.body.login;
    let password = this.request.body.password;

    let success = yield dao.checkUser(username, password)

    yield send(this, 'login.html', {hidden : true, root: pathToIndex})
}

function* getSignin(){
    const pathToIndex = path.join(__dirname, '..','views')
    yield send(this, 'signin.html', {hidden : true, root: pathToIndex})
}

function* postSignin(){
    const pathToIndex = path.join(__dirname, '..','views')

    let username = this.request.body.login;
    let password = this.request.body.password;

    let success = yield dao.insert(username, password)

    console.log('succes ' + success)

    yield send(this, 'signin.html', {hidden : true, root: pathToIndex})
}

const router = new Router();
router.get('/login', getLogin)
router.post('/login', postLogin)
router.get('/signin', getSignin)
router.post('/signin', postSignin)

module.exports.getLogin = getLogin;
module.exports.postLogin = postLogin
module.exports.getSignin = getSignin
module.exports.postSignin = postSignin
module.exports.router = router
