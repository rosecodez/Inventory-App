const mongoose = require('mongoose');
const { DateTime } = require('luxon');

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

MemorySchema.virtual('url').get(function () {
  return `/catalog/memory/${this._id}`;
});

MemorySchema.virtual('dateFirstAvailable_formatted').get(function () {
  return DateTime.fromJSDate(this.dateFirstAvailable).toLocaleString(
    DateTime.DATE_MED
  );
});

module.exports = mongoose.model('Memory', MemorySchema);
