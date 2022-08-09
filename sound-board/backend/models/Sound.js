const mongoose = require('mongoose');

const soundSchema = mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    soundUrl: { type: String, required: true },
  });
  
  module.exports = mongoose.model('Sound', soundSchema);