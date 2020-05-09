const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tagSchema = new Schema({
  tagname: { type: String, required: true, unique: true, trim: true, minlength: 3},
  eventtype: { type: String, required: true }, 
  postcategory: { type: String, required: true },
}, {
  timestamps: true,
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;