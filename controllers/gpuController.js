const GPU = require('../models/gpu');
const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

exports.index = asyncHandler(async (req, res) => {
  const allGPUs = await GPU.find().sort({ model: 1 }).exec();
  res.render('gpu_list', { title: 'Graphics Cards List', gpuList: allGPUs });
});

// Display list of all gpus
exports.gpu_list = asyncHandler(async (req, res, next) => {
  const allGPUs = await GPU.find().sort({ model: 1 }).exec();
  res.render('gpu_list', { title: 'Graphics Cards List', gpuList: allGPUs });
});

// Display detail page for a specific gpu
exports.gpu_detail = asyncHandler(async (req, res, next) => {
  const gpuItem = await GPU.findById(req.params.id);

  if (!gpuItem) {
    const err = new Error('gpu not found');
    err.status = 404;
    return next(err);
  }

  res.render('gpu_detail', {
    title: 'Graphics card details',
    gpuItem: gpuItem,
  });
});

// Display gpu create form on GET.
exports.gpu_create_get = asyncHandler(async (req, res, next) => {
  res.render('gpu_form', { title: 'Create Graphics Card' });
});

// Handle gpu create on POST.
exports.gpu_create_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: gpu create POST');
});

// Display gpu delete form on GET.
exports.gpu_delete_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: gpu delete GET');
});

// Handle gpu delete on POST.
exports.gpu_delete_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: gpu delete POST');
});

// Display gpu update form on GET.
exports.gpu_update_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: gpu update GET');
});

// Handle gpu update on POST.
exports.gpu_update_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: gpu update POST');
});
