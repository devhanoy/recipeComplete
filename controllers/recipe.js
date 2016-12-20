'use strict';

const dao = require('../dao/recipeDao');
const views = require('co-views');
const send = require('koa-send');
const path = require('path');

const render = views(__dirname + '/../views', {
  map: { html: 'swig' }
});

module.exports.home = function *home(next) {
  const pathToIndex = path.join(__dirname, '..','views')
    let recipes = yield send(this, 'index2.html', {hidden : true, root: pathToIndex})
};

module.exports.getAll = function *getAll(){
  this.body = yield dao.findAll()
}