const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const posttagSchema = new Schema({
  post: { type: String, required: true, unique: true, trim: true, minlength: 3},
  tag: { type: String, required: true }, 
}, {
  timestamps: true,
});

const PostTag = mongoose.model('PostTag', posttagSchema);

module.exports = PostTag;