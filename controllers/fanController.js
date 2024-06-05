const Fan = require('../models/fan');
const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

// Display list of all fans
exports.fan_list = asyncHandler(async (req, res, next) => {
  const allFans = await Fan.find().sort({ model: 1 }).exec();
  console.log('Fetched fans:', allFans);
  res.render('fan_list', { title: 'Fans List', fanList: allFans });
});

// Display detail page for a specific fan
exports.fan_detail = asyncHandler(async (req, res, next) => {
  const fanItem = await Fan.findById(req.params.id);

  if (!fanItem) {
    const err = new Error('fan not found');
    err.status = 404;
    return next(err);
  }

  res.render('fan_detail', {
    title: 'Fan details',
    fanItem: fanItem,
  });
});

// Display fan create form on GET.
exports.fan_create_get = asyncHandler(async (req, res, next) => {
  res.render('fan_form', { title: 'Create Fan' });
});

// Handle fan create on POST.
exports.fan_create_post = [
  // Validate and sanitize fields
  body('brand', 'Brand name must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('model', 'Model name must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('type', 'Type must be specified').trim().isLength({ min: 1 }).escape(),
  body('series', 'Series name must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('fanCounts', 'Fan counts name must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('rpm', 'Rpm name must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('airFlow', 'airFlow name must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('noiseLevel', 'noiseLevel name must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('LED', 'LED name must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('dimensions', 'dimensions name must be specified')
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
      res.render('fan_form', {
        title: 'Create fan',
        fanItem: req.body,
        errors: errors.array(),
      });
      return;
    }
    const newFan = new Fan({
      brand: req.body.brand,
      model: req.body.model,
      type: req.body.type,
      series: req.body.series,
      fanCounts: req.body,
      rpm: req.body.rpm,
      airFlow: req.body.airFlow,
      noiseLevel: req.body.noiseLevel,
      LED: req.body.LED,
      dimensions: req.body.dimensions,
      dateFirstAvailable: req.body.dateFirstAvailable,
    });
    await newFan.save();
    res.redirect(`/inventory-app/fan/${newFan._id}`);
  }),
];

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
