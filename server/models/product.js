"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const productSchema = new Schema({
  name: String,
  categoryId: ObjectId
});

const Product = mongoose.model("Product", productSchema);

const categoryProductSchema = new Schema({
  name: String
});

const CategoryProduct = mongoose.model(
  "CategoryProduct",
  categoryProductSchema
);

const unitProductSchema = new Schema({
  name: String
});

const UnitProduct = mongoose.model("UnitProduct", unitProductSchema);

module.exports.Product = Product;

module.exports.CategoryProduct = CategoryProduct;

module.exports.UnitProduct = UnitProduct;
