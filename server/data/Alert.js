const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  image: { type: String, required: 'The image is required!' },
  names: { type: Array, required: 'The names are required!' },
  timestamp: { type: String, required: 'The timestamp is required!' },
});

alertSchema.methods.func = function (a) {};
const Alert = mongoose.model('Alert', alertSchema);
module.exports = Alert;
