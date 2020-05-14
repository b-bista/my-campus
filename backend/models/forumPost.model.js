const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
{
    title: { type: String, required: true },
    description: { type: String, required: true },
    photo: { type: String},
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true},
    comments: [{
      body: String,
      postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
        },
      likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"}]
      }],
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
      ]
    }, {
      timestamps: true,
  }
);

const ForumPost = mongoose.model('ForumPost', postSchema);

module.exports = ForumPost;
