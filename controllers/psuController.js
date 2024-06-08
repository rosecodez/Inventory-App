const PSU = require('../models/psu');
const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

// Display list of all psus
exports.psu_list = asyncHandler(async (req, res, next) => {
  const allPSUs = await PSU.find().sort({ model: 1 }).exec();
  console.log('Fetched psus:', allPSUs);
  res.render('psu_list', {
    title: 'PSUs List',
    psuList: allPSUs,
  });
});

// Display detail page for a specific psu
exports.psu_detail = asyncHandler(async (req, res, next) => {
  const psuItem = await PSU.findById(req.params.id);

  if (!psuItem) {
    const err = new Error('psu not found');
    err.status = 404;
    return next(err);
  }

  res.render('psu_detail', {
    title: 'Power supply details',
    psuItem: psuItem,
  });
});

// Display psu create form on GET.
exports.psu_create_get = asyncHandler(async (req, res, next) => {
  res.render('psu_form', { title: 'Create Power Supply' });
});

// Handle psu create on POST.
// Handle psu create on POST.
exports.psu_create_post = [
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
  body('color', 'Color name must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('maxPower', 'maxPower name must be specified')
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
      res.render('psu_form', {
        title: 'Create psu',
        psuItem: req.body,
        errors: errors.array(),
      });
      return;
    }

    const newPSU = new PSU({
      brand: req.body.brand,
      model: req.body.model,
      type: req.body.type,
      series: req.body.series,
      color: req.body.color,
      maxPower: req.body.maxPower,
      dateFirstAvailable: req.body.dateFirstAvailable,
    });
    await newPSU.save();
    res.redirect(`/inventory-app/psu/${newPSU._id}`);
  }),
];

// Display psu delete form on GET.
exports.psu_delete_get = asyncHandler(async (req, res, next) => {
  const psuItem = await PSU.findById(req.params.id);

  if (!psuItem) {
    const err = new Error('psu not found');
    err.status = 404;
    return next(err);
  }

  res.render('psu_delete', {
    title: 'Power supply delete',
    psuItem: psuItem,
  });
});

// Handle psu delete on POST.
exports.psu_delete_post = asyncHandler(async (req, res, next) => {
  await PSU.findByIdAndDelete(req.params.id);
  res.redirect('/inventory-app/psus');
});

// Display psu update form on GET.
exports.psu_update_get = asyncHandler(async (req, res, next) => {
  const psuItem = await PSU.findById(req.params.id);

  if (!psuItem) {
    const err = new Error('psu not found');
    err.status = 404;
    return next(err);
  }

  res.render('psu_form', {
    title: 'Update power supply',
    psuItem: psuItem,
  });
});

// Handle psu update on POST.
exports.psu_update_post = [
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
  body('color', 'Color name must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('maxPower', 'maxPower name must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('dateFirstAvailable', 'Invalid date')
    .optional({ checkFalsy: true })
    .isISO8601()
    .toDate(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    const newPSU = new PSU({
      _id: req.params.id,
      brand: req.body.brand,
      model: req.body.model,
      type: req.body.type,
      series: req.body.series,
      color: req.body.color,
      maxPower: req.body.maxPower,
      dateFirstAvailable: req.body.dateFirstAvailable,
    });
    if (!errors.isEmpty()) {
      res.render('psu_form', {
        title: 'Update power supply',
        psuItem: req.body,
        errors: errors.array(),
      });
    } else {
      await PSU.findByIdAndUpdate(req.params.id, newPSU);
      res.redirect(`/inventory-app/psu/${newPSU._id}`);
    }
  }),
];
