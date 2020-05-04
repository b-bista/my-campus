const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  postname: { type: String, required: true},
  username: { type: String, required: true }, 
  content: { type: String, required: true },
  date: {type: Date, required: true}
}, {
  timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;