const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rsvpSchema = new Schema({
  eventname: { type: String, required: true, unique: true, trim: true, minlength: 3},
  username: { type: String, required: true }, 
  date: { type: Date, required: true },
  rsvpType: { type: String, required: true }
}, {
  timestamps: true,
});

const rsvp = mongoose.model('RSVP', rsvpSchema);

module.exports = rsvp;