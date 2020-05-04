const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  postname: { type: String, required: true, unique: true, trim: true, minlength: 3},
  username: { type: String, required: true }, 
  content: { type: String, required: true },
  date: {type: Date, required: true}
}, {
  timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;