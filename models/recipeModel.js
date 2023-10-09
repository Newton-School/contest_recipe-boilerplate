const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  // 'name' field is a required string
  // 'ingredients' field is a required array of strings
  // 'steps' field is a required array of strings
  // 'category' field is a string (optional)
  // 'user' field is a reference to the 'User' model
  // 'comments' field is an array of references to 'Comment' model
});

module.exports = mongoose.model('Recipe', recipeSchema);
