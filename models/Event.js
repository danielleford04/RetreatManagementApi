var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
  name: { type: String, required: true},
  type: { type: String, required: true},
  start_date: { type: Date, required: true},
  end_date: Date,
  retreatant_ids: Array,
  updated_at: { type: Date, default: Date.now },
  retreatantCount: Number
});

module.exports = mongoose.model('Event', EventSchema);
