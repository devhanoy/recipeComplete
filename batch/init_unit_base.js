"use strict";

const connect = require("../server/helpers/mongoConnection");
const UnitModel = require("../server/models/unit.model");

const baseUnits = ["g", "kg", "cuillères à soupe", "cuillères à café", "unité"];

execute();

async function execute() {
  await connect.connect();
  const allInsert = baseUnits.map(name => {
    const newUnit = new UnitModel({ name });
    return newUnit.save();
  });
  await Promise.all(allInsert);
  console.log("units saved!!!");
}
