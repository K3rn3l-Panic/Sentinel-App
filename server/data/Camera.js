const mongoose = require('mongoose');

const cameraSchema = new mongoose.Schema({
  url: { type: String, required: 'The camera url is required!', unique: true },
});

const Camera = mongoose.model('Camera', cameraSchema);
module.exports = Camera;
