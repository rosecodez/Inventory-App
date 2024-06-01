const asyncHandler = require('express-async-handler');
const CPU = require('../models/cpu');

// Display list of all CPUs
exports.cpu_list = asyncHandler(async (req, res, next) => {
  const allCPUs = await CPU.find().sort({ model: 1 }).exec();
  res.render('cpu_list', { title: 'Processors List', cpuList: allCPUs });
});

// Display detail page for a specific CPU
exports.cpu_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: cpu detail: ${req.params.id}`);
});

// Display CPU create form on GET.
exports.cpu_create_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: cpu create GET');
});

// Handle CPU create on POST.
exports.cpu_create_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: cpu create POST');
});

// Display CPU delete form on GET.
exports.cpu_delete_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: cpu delete GET');
});

// Handle CPU delete on POST.
exports.cpu_delete_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: cpu delete POST');
});

// Display CPU update form on GET.
exports.cpu_update_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: cpu update GET');
});

// Handle CPU update on POST.
exports.cpu_update_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: cpu update POST');
});
