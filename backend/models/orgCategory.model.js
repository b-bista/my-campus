const mongoose = require('mongoose');

const orgCategorySchema = new mongoose.Schema({
  name: { type: String, required: true}
}, {
  timestamps: true,
});

const OrgCategory = mongoose.model('OrgCategory', orgCategorySchema);

module.exports = OrgCategory;