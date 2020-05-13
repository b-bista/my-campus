const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true},
  name: { type: String, required: true},
  gender: { type: String, required: true },
  //dateofBirth: {type:Date, required: true},
}, {
  timestamps: true,
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

module.exports = UserProfile;