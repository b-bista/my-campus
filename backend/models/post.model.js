const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
  body: { type: String, required: true },
  photo: { type: String, required: true },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true},
  comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
        required: true
      }
    ],
  likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
        required: true
      }
    ]
  }, {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);