const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MemorySchema = new Schema({
  brand: { type: String, required: true },
  type: { type: String, required: true },
  series: { type: String, required: true },
  model: { type: String, required: true },
  capacity: { type: String, required: true },
  speed: { type: String, required: true },
  dateFirstAvailable: { type: Date, required: true },
});

module.exports = mongoose.model('Memory', MemorySchema);
