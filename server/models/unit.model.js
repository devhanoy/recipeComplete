"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const unitSchema = new Schema({
  name: String
});

const Unit = mongoose.model("Unit", unitSchema);

module.exports = Unit;
