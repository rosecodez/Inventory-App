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
exports.memory_create_post = [
  // Validate and sanitize fields
  body('brand', 'Brand name must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('type', 'Type name must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('series', 'Series must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('model', 'Model must be specified').trim().isLength({ min: 1 }).escape(),
  body('capacity', 'Capacity must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('speed', 'Speed must be specified').trim().isLength({ min: 1 }).escape(),
  body('dateFirstAvailable', 'Invalid date')
    .optional({ checkFalsy: true })
    .isISO8601()
    .toDate(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render('memory_form', {
        title: 'Create memory',
        memoryItem: req.body,
        errors: errors.array(),
      });
      return;
    }

    const newMemory = new Memory({
      brand: req.body.brand,
      type: req.body.type,
      series: req.body.series,
      model: req.body.model,
      capacity: req.body.capacity,
      speed: req.body.speed,
      dateFirstAvailable: req.body.dateFirstAvailable,
    });
    await newMemory.save();
    res.redirect(`/inventory-app/memory/${newMemory._id}`);
  }),
];

// Display memory delete form on GET.
exports.memory_delete_get = asyncHandler(async (req, res, next) => {
  const memoryItem = await Memory.findById(req.params.id);

  if (!memoryItem) {
    const err = new Error('memory not found');
    err.status = 404;
    return next(err);
  }

  res.render('memory_delete', {
    title: 'Memory delete',
    memoryItem: memoryItem,
  });
});

// Handle memory delete on POST.
exports.memory_delete_post = asyncHandler(async (req, res, next) => {
  const memoryItemId = req.params.id;

  await Memory.findByIdAndDelete(memoryItemId);
  res.redirect('/inventory-app/memories');
});

// Display memory update form on GET.
exports.memory_update_get = asyncHandler(async (req, res, next) => {
  const memoryItem = await Memory.findById(req.params.id);

  if (!memoryItem) {
    const err = new Error('memory not found');
    err.status = 404;
    return next(err);
  }

  res.render('memory_form', {
    title: 'Update memory',
    memoryItem: memoryItem,
  });
});

// Handle memory update on POST.
exports.memory_update_post = [
  // Validate and sanitize fields
  body('brand', 'Brand name must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('type', 'Type name must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('series', 'Series must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('model', 'Model must be specified').trim().isLength({ min: 1 }).escape(),
  body('capacity', 'Capacity must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('speed', 'Speed must be specified').trim().isLength({ min: 1 }).escape(),
  body('dateFirstAvailable', 'Invalid date')
    .optional({ checkFalsy: true })
    .isISO8601()
    .toDate(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const memoryItem = new Memory({
      _id: req.params.id,
      brand: req.body.brand,
      type: req.body.type,
      series: req.body.series,
      model: req.body.model,
      capacity: req.body.capacity,
      speed: req.body.speed,
      dateFirstAvailable: req.body.dateFirstAvailable,
    });

    if (!errors.isEmpty()) {
      res.render('memory_form', {
        title: 'Update memory',
        memoryItem: req.body,
        errors: errors.array(),
      });
    } else {
      await Memory.findByIdAndUpdate(req.params.id, memoryItem);
      res.redirect(`/inventory-app/memory/${memoryItem._id}`);
    }
  }),
];
