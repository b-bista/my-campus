const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true},
  description: { type: String, required: true },
  location: { type: String, required: true },
  from: { type: Date, required: true },
  to: { type: Date, required: true },
  photo: { type: String},
  hostedBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"},
  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "EventCategory"}],
  going: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"}],
  interested: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
}, {
  timestamps: true,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;