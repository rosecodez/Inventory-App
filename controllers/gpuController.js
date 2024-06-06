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
exports.gpu_create_post = [
  // Validate and sanitize fields
  body('brand', 'Brand name must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('model', 'Model name must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('gpuInterface', 'gpuInterface must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('series', 'Series name must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('GPU', 'Color name must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('dateFirstAvailable', 'Invalid date')
    .optional({ checkFalsy: true })
    .isISO8601()
    .toDate(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render('gpu_form', {
        title: 'Create gpu',
        gpuItem: req.body,
        errors: errors.array(),
      });
      return;
    }

    const newGPU = new GPU({
      brand: req.body.brand,
      model: req.body.model,
      gpuInterface: req.body.gpuInterface,
      series: req.body.series,
      GPU: req.body.GPU,
      dateFirstAvailable: req.body.dateFirstAvailable,
    });
    await newGPU.save();
    res.redirect(`/inventory-app/gpu/${newGPU._id}`);
  }),
];

// Display gpu delete form on GET.
exports.gpu_delete_get = asyncHandler(async (req, res, next) => {
  const gpuItem = await GPU.findById(req.params.id);

  if (!gpuItem) {
    const err = new Error('gpu not found');
    err.status = 404;
    return next(err);
  }

  res.render('gpu_delete', {
    title: 'Graphics card delete',
    gpuItem: gpuItem,
  });
});

// Handle gpu delete on POST.
exports.gpu_delete_post = asyncHandler(async (req, res, next) => {
  await GPU.findByIdAndDelete(req.params.id);
  res.redirect('/inventory-app/gpus');
});

// Display gpu update form on GET.
exports.gpu_update_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: gpu update GET');
});

// Handle gpu update on POST.
exports.gpu_update_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: gpu update POST');
});
