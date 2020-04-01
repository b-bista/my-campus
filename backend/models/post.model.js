const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  username: { type: String, required: true, unique: true, trim: true, minlength: 3},
  atr1: { type: String, required: true }, 
  atr2: { type: String, required: true }
}, {
  timestamps: true,
});

const Post = mongoose.model('Post', userSchema);

module.exports = Post;