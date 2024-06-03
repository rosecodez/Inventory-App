const mongoose = require('mongoose');
const { DateTime } = require('luxon');

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

CPUSchema.virtual('url').get(function () {
  return `/inventory-app/catalog/cpu/${this._id}`;
});

CPUSchema.virtual('dateFirstAvailable_formatted').get(function () {
  return DateTime.fromJSDate(this.dateFirstAvailable).toLocaleString(
    DateTime.DATE_MED
  );
});

module.exports = mongoose.model('CPU', CPUSchema);
