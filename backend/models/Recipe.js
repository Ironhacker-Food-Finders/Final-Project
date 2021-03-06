//Recipe Model which is template for Recipes created in mongoDB database

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    
    title: { type: String, required: true, unique: true},
    category: [{ type: String, enum: ['Vegetarian', 'Vegan','Pork','Chicken','Beef','Seafood','Other'], required: true }],
    dishtype: { type: String, enum: ['Breakfast', 'Dish', 'Snack', 'Drink', 'Dessert', 'Other']},
    area: {type: String},
    cuisine: { type: String},
    instructions: {type: String, required: true},
    imageUrl: {type: String, default:'https://images.media-allrecipes.com/images/75131.jpg'},
    tags: {type: Array},
    video: {type: String},
    ingredients: {type: Array, required: true},
    measurements: {type: Array},
    source: {type: String},
    profileID: {type: String},
    created: {type:Date, default: Date.now()},
    comments: {type: Array}
  
  });
  
  const Recipe = mongoose.model('Recipe', recipeSchema);
  module.exports = Recipe;