const PSU = require('../models/psu');
const asyncHandler = require('express-async-handler');

// Display list of all psus
exports.psu = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: psu list');
});

// Display detail page for a specific psu
exports.psu_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: psu detail: ${req.params.id}`);
});

// Display psu create form on GET.
exports.psu_create_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: psu create GET');
});

// Handle psu create on POST.
exports.psu_create_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: psu create POST');
});

// Display psu delete form on GET.
exports.psu_delete_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: psu delete GET');
});

// Handle psu delete on POST.
exports.psu_delete_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: psu delete POST');
});

// Display psu update form on GET.
exports.case_update_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: psu update GET');
});

// Handle psu update on POST.
exports.psu_update_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: psu update POST');
});
