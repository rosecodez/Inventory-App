const Case = require('../models/case');
const asyncHandler = require('express-async-handler');

// Display list of all cases
exports.case_list = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: case list');
});

// Display detail page for a specific case
exports.case_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: case detail: ${req.params.id}`);
});

// Display case create form on GET.
exports.case_create_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: case create GET');
});

// Handle case create on POST.
exports.case_create_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: case create POST');
});

// Display case delete form on GET.
exports.case_delete_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: case delete GET');
});

// Handle case delete on POST.
exports.case_delete_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: case delete POST');
});

// Display case update form on GET.
exports.case_update_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: case update GET');
});

// Handle case update on POST.
exports.case_update_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: case update POST');
});
