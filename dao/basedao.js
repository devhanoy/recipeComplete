'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const connection = require('./baseConnection')

const blogSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
})

const Blog = mongoose.model('Blog', blogSchema)

let nblog = new Blog({
  title: 'Un titre',
  author: 'JK Rowling',
  body: 'Harry Potter à l\'école des sorciers',
  comments: [{ body: 'C\'est trop génial!!!', date: new Date() }],
  // date: { type: Date, default: Date.now },
  hidden: false,
  meta: {
    votes: 16,
    favs: 11
  }
})

connection.connect()
    .then(function () {
      return nblog.save()
    })
    .then(function (b) {
      console.log(b)
      console.log('success ;-)')
    })
    .catch(function (err) {
      console.error(err)
      console.log('fail :-(')
    })
