const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true},
  photo: { type: String, required: true},
  username: { type: String, required: true},
  email: { type: String, required: true }, 
  password: { type: String, required: true},
  userType: { type: String, required: true},
  isActive: {type: Boolean}
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;