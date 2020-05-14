const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
{
    title: { type: String, required: true },
    description: { type: String, required: true},
    photo: { type: String, required: true},
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ForumPost"
        }]
    }, {
      timestamps: true,
  }
);

const ForumTopic = mongoose.model('ForumTopic', postSchema);

module.exports = ForumTopic;
