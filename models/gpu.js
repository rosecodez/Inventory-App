const mongoose = require('mongoose');
const { DateTime } = require('luxon');

const Schema = mongoose.Schema;

const GPUSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  gpuInterface: { type: String, required: true },
  series: { type: String, required: true },
  GPU: { type: String, required: true },
  dateFirstAvailable: { type: Date },
});

GPUSchema.virtual('url').get(function () {
  return `/catalog/gpu/${this._id}`;
});

GPUSchema.virtual('dateFirstAvailable_formatted').get(function () {
  return DateTime.fromJSDate(this.dateFirstAvailable).toLocaleString(
    DateTime.DATE_MED
  );
});

module.exports = mongoose.model('GPU', GPUSchema);
