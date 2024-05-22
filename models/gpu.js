const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GPUSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  interface: { type: String, required: true },
  series: { type: String, required: true },
  GPU: { type: String, required: true },
  dateFirstAvailable: { type: Date, required: true },
});

module.exports = mongoose.model('GPU', GPUSchema);
