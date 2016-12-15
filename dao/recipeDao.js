"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const connection = require('./baseConnection')

const recipeSchema = new Schema({
  title:  String,
  products: [{name: String, quantity: Number, unit: String}],
  steps:   [String],
  category: String,
});

const Recipe = mongoose.model('Recipe', recipeSchema);


module.exports.Recipe = Recipe;
module.exports.findAll = () => connection.connect().then(() => Recipe.find())

// let nRecipe = new Recipe({
//     title:  'Lasagnes',
//   products: [{name: 'Pâte', quantity: 500, unit: 'g'}, {name: 'Viande hachée', quantity: 600, unit: 'g'}, {name: 'Coulis de tomate', quantity: 400, unit: 'ml'}],
//   steps:   ['Mettre une couche de viande dans un récipient pour le four', 'Ajouter de la sauce tomate', 'Mettre une couche de pâte', "répétez l'opération 2 à 3 fois", "Enfourner pendant 25 minutes à 180°C"],
//   category: 'Plat principal',
// })

// let nRecipe2 = new Recipe({
//     title:  'Poulet à la crème',
//   products: [{name: 'Filets de poulet', quantity: 2, unit: 'unité'}, {name: 'Crème fraîche', quantity: 50, unit: 'g'}],
//   steps:   ['Faire dorer les filets de poulets à la poêle', "Ajouter la crème à la fin de la cuisson afin qu'elle devienne liquide", "Servir accompagnée de pâtes ou de pommes de terre"],
//   category: 'Plat principal',
// })

// connection.connect()
//     .then(() => nRecipe.save())
//     .then((rec) => {
//         console.log(rec);
//         return nRecipe2.save();
//     })
//     .then((rec) =>{
//         console.log(rec);
//         console.log('success')
//         return true;
//     })
//     .catch((err) => console.error(err))