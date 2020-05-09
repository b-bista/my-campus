const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventname: { type: String, required: true, unique: true, trim: true, minlength: 3},
  username: { type: String, required: true }, 
  location: { type: String, required: true },
  datefrom: { type: Date, required: true },
  dateto: { type: Date, required: true },
  eventtype: { type: String, required: true },
  eventdescription: { type: String, required: true },
  eventphoto: { type: String, required: true },
  eventrsvp: { type: String, required: true },
  date: {type: Date, required: true}
}, {
  timestamps: true,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;