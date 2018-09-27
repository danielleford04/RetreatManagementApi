var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  name: String,
  content: String,
  complete: Boolean,
  due_date: Date,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Task', TaskSchema);
