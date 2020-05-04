const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSettingsSchema = new Schema({
  userProfileID:{type: Number, required: true, unique: true},
  userID: {type: Number, required: true, unique: true},
  firstName: { type: String, required: true},
  lastName: { type: String, required: true }, 
  gender: { type: String, required: true },
  dateofBirth: {type:Date, required: true},
  // Long String??
  about: { type: String, required: true },
  dateUpdated: {type: Date, required: true},
  externalAccount: {type: String, required: true}
}, {
  timestamps: true,
});

const userSettings = mongoose.model('User Settings', userSettingsSchema);

module.exports = userSettings;