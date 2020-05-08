const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postcategorySchema = new Schema({
  post: { type: String, required: true, unique: true, trim: true, minlength: 3},
  category: { type: String, required: true }, 
}, {
  timestamps: true,
});

const PostCategory = mongoose.model('PostCategory', postcategorySchema);

module.exports = PostCategory;