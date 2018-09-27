var mongoose = require('mongoose');

var RetreatantSchema = new mongoose.Schema({
  name: String,
  email: String,
  notes: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Retreatant', RetreatantSchema);
