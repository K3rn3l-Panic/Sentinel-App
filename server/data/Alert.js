const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema({
  image: { type: String },
  name: { type: String },
  timestamp: { type: String }
});

alertSchema.methods.func = function(a) {};
const Alert = mongoose.model("Alert", alertSchema);
module.exports = Alert;
