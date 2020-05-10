const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true},
  firstName: { type: String, required: true},
  lastName: { type: String, required: true }, 
  gender: { type: String, required: true },
  //dateofBirth: {type:Date, required: true},
  photo: {type: String},
  followers:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
  following: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }]
}, {
  timestamps: true,
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

module.exports = UserProfile;