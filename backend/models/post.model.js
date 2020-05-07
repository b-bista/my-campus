const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;
const Schema = mongoose.Schema;

const postSchema = new Schema({
  body: { type: String, required: true },
  photo: { type: String, required: true },
  postedBy: { type: String, required: true }/*,
  likes:[{type:ObjectId,ref:"User"}],
  comments:[{
    text:String,
    postedBy:{type:ObjectId,ref:"User"}
  }],
  postedBy:{
    type:ObjectId,
    ref:"User"
  }*/
}, {
  timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;