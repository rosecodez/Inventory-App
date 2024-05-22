const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CPUSchema = new Schema({
  brand: { type: String, required: true },
  type: { type: String, required: true },
  series: { type: String, required: true },
  name: { type: String, required: true },
  model: { type: String, required: true },
  socket: { type: String, required: true },
  dateFirstAvailable: { type: Date, required: true },
});

module.exports = mongoose.model('CPU', CPUSchema);
