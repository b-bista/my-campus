const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true, maxlength: 45},
  email: { type: String, required: true,unique: true, trim: true, maxlength:45 }, 
  password: { type: String, required: true, unique: true, trim: true,minlength:8, maxlength:65 },
  userType: { type: String, required: true},
  isActive: {type: Boolean, required: false}
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;