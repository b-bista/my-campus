const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSettingsSchema = new Schema({
  userID: {type: Number, required: true,
// Type = enum (on, off) 
  notifNewsletter: { type:Number, required: true}, 
  notifFollower: { type:Number , required: true },
  notifComment: {type:Number , required: true},
  notifMessages: {type:Number , required: true}
}, {
  timestamps: true,
});

const userSettings = mongoose.model('User Settings', userSettingsSchema);

module.exports = userSettings;