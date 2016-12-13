'use strict';

const dao = require('../dao/recipeDao');
const views = require('co-views');
const parse = require('co-body');
const send = require('koa-send');
const path = require('path');


const render = views(__dirname + '/../views', {
  map: { html: 'swig' }
});

// module.exports.home = function *home(ctx) {
//     let recipes = yield dao.findAll();
//     this.body = yield render('recipes', { 'recipes': recipes });
// };


module.exports.home = function *home(next) {
  const pathToIndex = path.join(__dirname, '..','views','index2.html')
  const relPath = ['..','views','index2.html'].join('/')
    let recipes = yield send(this, 'index2.html', {hidden : true, root: __dirname + '/../views'})
};

module.exports.getAll = function *getAll(){
  this.body = yield dao.findAll()
}