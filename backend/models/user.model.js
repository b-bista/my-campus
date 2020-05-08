const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true, trim: true, maxlength: 45},
  email: { type: String, required: true,unique: true, trim: true, maxlength:45 }, 
  password: { type: String, required: true, unique: true, trim: true,minlength:8, maxlength:45 },
  userType: { type: String, required: true}
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;