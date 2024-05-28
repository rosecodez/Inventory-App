const Motherboard = require('../models/motherboard');
const asyncHandler = require('express-async-handler');

// Display list of all motherboards
exports.motherboard = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: motherboard list');
});

// Display detail page for a specific motherboard
exports.motherboard_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: motherboard detail: ${req.params.id}`);
});

// Display motherboard create form on GET.
exports.motherboard_create_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: motherboard create GET');
});

// Handle motherboard create on POST.
exports.motherboard_create_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: motherboard create POST');
});

// Display motherboard delete form on GET.
exports.motherboard_delete_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: motherboard delete GET');
});

// Handle motherboard delete on POST.
exports.motherboard_delete_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: motherboard delete POST');
});

// Display motherboard update form on GET.
exports.case_update_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: motherboard update GET');
});

// Handle motherboard update on POST.
exports.motherboard_update_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: motherboard update POST');
});
