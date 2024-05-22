const mongoose = require('mongoose');
const { DateTime } = require('luxon');

const Schema = mongoose.Schema;

const PSUSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  type: { type: String, required: true },
  series: { type: String, required: true },
  color: { type: String, required: true },
  maxPower: { type: String, required: true },
  dateFirstAvailable: { type: Date, required: true },
});

PSUSchema.virtual('url').get(function () {
  return `/catalog/psu/${this._id}`;
});

PSUSchema.virtual('dateFirstAvailable_formatted').get(function () {
  return DateTime.fromJSDate(this.dateFirstAvailable).toLocaleString(
    DateTime.DATE_MED
  );
});

module.exports = mongoose.model('PSU', PSUSchema);
