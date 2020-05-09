const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  category: { type: String, required: true, minlength: 3}
}, {
  timestamps: true,
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;