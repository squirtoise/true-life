const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  handle: {type: String, required: true, unique: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  service: {type: String, required: true},
  zip: {type: Number, required: true},
  hourly: {type: Number, required: true}

});

module.exports = mongoose.model('User', userSchema);