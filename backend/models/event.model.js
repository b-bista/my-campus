const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: { type: String, required: true},
  hostedby: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserProfile",
    required: true}, 
  location: { type: String, required: true },
  datefrom: { type: Date, required: true },
  dateto: { type: Date, required: true },
  description: { type: String, required: true },
  eventphoto: { type: String, required: true },
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