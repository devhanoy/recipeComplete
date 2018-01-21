"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
// const connection = require('./baseConnection')

const recipeSchema = new Schema({
  title: String,
  products: [{ productId: ObjectId, quantity: Number, unitId: ObjectId }],
  steps: [String],
  category: String,
  test: Boolean
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
