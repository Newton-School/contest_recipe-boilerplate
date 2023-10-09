const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  // 'text' field is a string
  // 'user' field is a reference to the 'User' model
  // 'recipe' field is a reference to the 'Recipe' model
});

module.exports = mongoose.model('Comment', commentSchema);
