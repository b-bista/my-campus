const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true, maxlength: 45},
  photo: { type: String},
  username: { type: String, required: true, unique: true, trim: true, maxlength: 45},
  email: { type: String, required: true,unique: true, trim: true, maxlength:45 }, 
  password: { type: String, required: true, unique: true, trim: true,minlength:8, maxlength:65 },
  userType: { type: String, required: true},
  isActive: {type: Boolean}
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;