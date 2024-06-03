const mongoose = require('mongoose');
const { DateTime } = require('luxon');

const Schema = mongoose.Schema;

const MotherboardSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  CPUSocketType: { type: String, required: true },
  CPUType: { type: String, required: true },
  chipset: { type: String, required: true },
  dateFirstAvailable: { type: Date, required: true },
});

MotherboardSchema.virtual('url').get(function () {
  return `/inventory-app/motherboard/${this._id}`;
});

MotherboardSchema.virtual('dateFirstAvailable_formatted').get(function () {
  return DateTime.fromJSDate(this.dateFirstAvailable).toLocaleString(
    DateTime.DATE_MED
  );
});

module.exports = mongoose.model('Motherboard', MotherboardSchema);
