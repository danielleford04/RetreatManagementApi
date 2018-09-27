var mongoose = require('mongoose');

var StoredFormSchema = new mongoose.Schema({
  name: String,
  note: String,
  upload_date: Date,
  //stored_form_file ??
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('StoredForm', StoredFormSchema);
