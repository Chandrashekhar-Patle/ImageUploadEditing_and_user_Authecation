const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  filename: String,
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  boundaries: Array,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Image', ImageSchema);
