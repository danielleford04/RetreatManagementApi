var mongoose = require('mongoose');

var InstructionSchema = new mongoose.Schema({
  name: String,
  content: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Instruction', InstructionSchema);
