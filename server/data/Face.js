//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var FaceSchema = new Schema({
    name: String,
    encoding: String,
    image: String
});

const Face = mongoose.model('Face', FaceSchema);

module.exports = Face;