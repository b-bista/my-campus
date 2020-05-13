const mongoose = require('mongoose');

const orgProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true},
  name: { type: String, required: true},
  about: { type: String, required: true }, 
  //dateEstablished: {type:Date, required: true},
  banner: {type: String},
  category:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "OrgCategory"
  }],
  events: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event"
  }]
}, {
  timestamps: true,
});

const OrgProfile = mongoose.model('OrgProfile', orgProfileSchema);

module.exports = OrgProfile;