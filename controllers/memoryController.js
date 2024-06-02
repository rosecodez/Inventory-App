const Memory = require('../models/memory');
const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

// Display list of all memories
exports.memory_list = asyncHandler(async (req, res, next) => {
  const allMemories = await Memory.find().sort({ model: 1 }).exec();
  console.log('Fetched memories:', allMemories);
  res.render('memory_list', {
    title: 'Memories List',
    memoryList: allMemories,
  });
});

// Display detail page for a specific memory
exports.memory_detail = asyncHandler(async (req, res, next) => {
  const memoryItem = await Memory.findById(req.params.id);

  if (!memoryItem) {
    const err = new Error('memory not found');
    err.status = 404;
    return next(err);
  }

  res.render('memory_detail', {
    title: 'Memory details',
    memoryItem: memoryItem,
  });
});

// Display memory create form on GET.
exports.memory_create_get = asyncHandler(async (req, res, next) => {
  res.render('memory_form', { title: 'Create Memory' });
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
exports.memory_update_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: memory update GET');
});

// Handle memory update on POST.
exports.memory_update_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: memory update POST');
});
