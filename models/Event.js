var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
  name: String,
  type: String,
  start_date: Date,
  end_date: Date,
  retreatant_ids: Array,
  updated_at: { type: Date, default: Date.now },
  retreatantCount: Number
});

module.exports = mongoose.model('Event', EventSchema);
