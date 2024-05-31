const Fan = require('../models/fan');
const asyncHandler = require('express-async-handler');

// Display list of all fans
exports.fan_list = asyncHandler(async (req, res, next) => {
  const allFans = await Fan.find().sort({ model: 1 }).exec();
  console.log('Fetched fans:', allFans);
  res.render('fan_list', { title: 'Fans List', fanList: allFans });
});

// Display detail page for a specific fan
exports.fan_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: fan detail: ${req.params.id}`);
});

// Display fan create form on GET.
exports.fan_create_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: fan create GET');
});

// Handle fan create on POST.
exports.fan_create_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: fan create POST');
});

// Display fan delete form on GET.
exports.fan_delete_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: fan delete GET');
});

// Handle fan delete on POST.
exports.fan_delete_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: fan delete POST');
});

// Display fan update form on GET.
exports.fan_update_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: fan update GET');
});

// Handle fan update on POST.
exports.fan_update_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: fan update POST');
});
