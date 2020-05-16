const mongoose = require('mongoose');

const forumPostSchema = new mongoose.Schema(
{
    title: { type: String, required: true },
    description: { type: String, required: true },
    photo: { type: String},
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true},
    topic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ForumTopic",
      required: true},
    comments: [{
      body: String,
      postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
        }
      }]
    }, {
      timestamps: true,
  }
);

const ForumPost = mongoose.model('ForumPost', forumPostSchema);

module.exports = ForumPost;
