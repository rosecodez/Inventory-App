const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MotherboardSchema = new Schema({
  brand: { type: String, required: true },
  type: { type: String, required: true },
  model: { type: String, required: true },
  CPUSocketType: { type: String, required: true },
  CPUType: { type: String, required: true },
  chipset: { type: String, required: true },
  dateFirstAvailable: { type: Date, required: true },
});

module.exports = mongoose.model('Motherboard', MotherboardSchema);
