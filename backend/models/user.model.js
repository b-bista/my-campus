const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userID: {type: Number, required: true, unique: true},
  username: { type: String, required: true, unique: true, trim: true, maxlength: 45},
  email: { type: String, required: true,unique: true, trim: true, maxlength:45 }, 
  password: { type: String, required: true, unique: true, trim: true,minlength:8, maxlength:45 },
  dateRegistered: {type:Date, required: true},
  userType: { type: String, required: true},
  accountStatus: {type: String, required: true},
  lastAccessed: {type: Date, required: true}
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;