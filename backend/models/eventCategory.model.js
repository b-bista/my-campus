const mongoose = require('mongoose');

const eventCategorySchema = new mongoose.Schema({
  name: { type: String, required: true}
}, {
  timestamps: true,
});

const EventCategory = mongoose.model('EventCategory', eventCategorySchema);

module.exports = EventCategory;