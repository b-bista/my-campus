const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const locationSchema = new Schema({
  location: { type: String, required: true, unique: true, trim: true, minlength: 3},
  city: { type: String, required: true }, 
  state: { type: String, required: true },
  zipcode: { type: String, required: true },
  country: { type: String, required: true },
  building: { type: String, required: true },
  room: { type: String, required: true }
}, {
  timestamps: true,
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;