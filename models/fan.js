const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FanSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  type: { type: String, required: true },
  series: { type: String, required: true },
  fanCounts: { type: String, required: true },
  rpm: { type: String, required: true },
  airFlow: { type: String, required: true },
  noiseLevel: { type: String, required: true },
  LED: { type: String, required: true },
  dimensions: { type: String, required: true },
  dateFirstAvailable: { type: Date, required: true },
});

module.exports = mongoose.model('Fan', FanSchema);
