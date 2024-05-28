const Memory = require('../models/memory');
const asyncHandler = require('express-async-handler');

// Display list of all memories
exports.memory_list = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: memory list');
});

// Display detail page for a specific memory
exports.memory_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: memory detail: ${req.params.id}`);
});

// Display memory create form on GET.
exports.memory_create_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: memory create GET');
});

// Handle memory create on POST.
exports.memory_create_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: memory create POST');
});

// Display memory delete form on GET.
exports.memory_delete_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: memory delete GET');
});

// Handle memory delete on POST.
exports.memory_delete_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: memory delete POST');
});

// Display memory update form on GET.
exports.case_update_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: memory update GET');
});

// Handle memory update on POST.
exports.memory_update_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: memory update POST');
});
