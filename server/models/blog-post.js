const { stringify } = require('@angular/compiler/src/util');
const mongoose = require('mongoose');

const blogPostSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  body: String,
  author: String,
  date: Date
})

module.exports = mongoose.model('BlogPost', blogPostSchema);