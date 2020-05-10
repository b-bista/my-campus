const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
{
    body: { type: String, required: true },
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
    /*comments: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Comment",
          required: true
        }
      ],*/
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

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
