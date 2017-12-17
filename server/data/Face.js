// Require Mongoose
const mongoose = require('mongoose');

// Define a schema
const Schema = mongoose.Schema;

const FaceSchema = new Schema({
  name: { type: String, required: 'The name is required!', unique: true },
  encoding: { type: String, required: 'The encoding is required!', unique: false },
  image: { type: String, required: 'The image is required!', unique: false },
});

const Face = mongoose.model('Face', FaceSchema);

module.exports = Face;
