var mongoose = require('mongoose');

var EmailSchema = new mongoose.Schema({
  name: String,
  subject: String,
  content: String,
  date: Date,
  event: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Email', EmailSchema);
