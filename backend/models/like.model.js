const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    likedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true},
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: true},
    comment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
        required: true}
}, {
  timestamps: true,
});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;