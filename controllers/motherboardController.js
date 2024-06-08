const Motherboard = require('../models/motherboard');
const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

// Display list of all motherboards
exports.motherboard_list = asyncHandler(async (req, res, next) => {
  const allMotherboards = await Motherboard.find().sort({ model: 1 }).exec();
  console.log('Fetched motherboards:', allMotherboards);
  res.render('motherboard_list', {
    title: 'Motherboard List',
    motherboardList: allMotherboards,
  });
});

// Display detail page for a specific motherboard
exports.motherboard_detail = asyncHandler(async (req, res, next) => {
  const motherboardItem = await Motherboard.findById(req.params.id);

  if (!motherboardItem) {
    const err = new Error('motherboard not found');
    err.status = 404;
    return next(err);
  }

  res.render('motherboard_detail', {
    title: 'Motherboard details',
    motherboardItem: motherboardItem,
  });
});

// Display motherboard create form on GET.
exports.motherboard_create_get = asyncHandler(async (req, res, next) => {
  res.render('motherboard_form', { title: 'Create Motherboard' });
});

// Handle motherboard create on POST.
exports.motherboard_create_post = [
  // Validate and sanitize fields
  body('brand', 'Brand name must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('model', 'Model name must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('CPUSocketType', 'CPUSocketType must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('CPUType', 'CPUType name must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('chipset', 'chipset name must be specified')
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
      res.render('motherboard_form', {
        title: 'Create motherboard',
        motherboardItem: req.body,
        errors: errors.array(),
      });
      return;
    }

    const newMotherboard = new Motherboard({
      brand: req.body.brand,
      model: req.body.model,
      CPUSocketType: req.body.CPUSocketType,
      CPUType: req.body.CPUType,
      chipset: req.body.chipset,
      dateFirstAvailable: req.body.dateFirstAvailable,
    });
    await newMotherboard.save();
    res.redirect(`/inventory-app/motherboard/${newMotherboard._id}`);
  }),
];

// Display motherboard delete form on GET.
exports.motherboard_delete_get = asyncHandler(async (req, res, next) => {
  const motherboardItem = await Motherboard.findById(req.params.id);

  if (!motherboardItem) {
    const err = new Error('motherboard not found');
    err.status = 404;
    return next(err);
  }

  res.render('motherboard_delete', {
    title: 'Motherboard delete',
    motherboardItem: motherboardItem,
  });
});

// Handle motherboard delete on POST.
exports.motherboard_delete_post = asyncHandler(async (req, res, next) => {
  await Motherboard.findByIdAndDelete(req.params.id);
  res.redirect('/inventory-app/motherboards');
});

// Display motherboard update form on GET.
exports.motherboard_update_get = asyncHandler(async (req, res, next) => {
  const motherboardItem = await Motherboard.findById(req.params.id);

  if (!motherboardItem) {
    const err = new Error('motherboard not found');
    err.status = 404;
    return next(err);
  }

  res.render('motherboard_form', {
    title: 'Update motherboard',
    motherboardItem: motherboardItem,
  });
});

// Handle motherboard update on POST.
exports.motherboard_update_post = [
  // Validate and sanitize fields
  body('brand', 'Brand name must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('model', 'Model name must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('CPUSocketType', 'CPUSocketType must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('CPUType', 'CPUType name must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('chipset', 'chipset name must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('dateFirstAvailable', 'Invalid date')
    .optional({ checkFalsy: true })
    .isISO8601()
    .toDate(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const motherboardItem = new Motherboard({
      _id: req.params.id,
      brand: req.body.brand,
      model: req.body.model,
      CPUSocketType: req.body.CPUSocketType,
      CPUType: req.body.CPUType,
      chipset: req.body.chipset,
      dateFirstAvailable: req.body.dateFirstAvailable,
    });

    if (!errors.isEmpty()) {
      res.render('motherboard_form', {
        title: 'Create motherboard',
        motherboardItem: req.body,
        errors: errors.array(),
      });
    } else {
      await Motherboard.findByIdAndUpdate(req.params.id, motherboardItem);
      res.redirect(`/inventory-app/motherboard/${motherboardItem._id}`);
    }
  }),
];
