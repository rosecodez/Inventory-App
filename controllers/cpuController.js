const asyncHandler = require('express-async-handler');
const CPU = require('../models/cpu');
const { body, validationResult } = require('express-validator');

// Display list of all CPUs
exports.cpu_list = asyncHandler(async (req, res, next) => {
  const allCPUs = await CPU.find().sort({ model: 1 }).exec();
  console.log(allCPUs);
  res.render('cpu_list', { title: 'Processors List', cpuList: allCPUs });
});

// Display detail page for a specific CPU
exports.cpu_detail = asyncHandler(async (req, res, next) => {
  const cpuItem = await CPU.findById(req.params.id);

  if (!cpuItem) {
    const err = new Error('cpu not found');
    err.status = 404;
    return next(err);
  }

  res.render('cpu_detail', {
    title: 'Processor details',
    cpuItem: cpuItem,
  });
});

// Display CPU create form on GET.
exports.cpu_create_get = asyncHandler(async (req, res, next) => {
  res.render('cpu_form', { title: 'Create processor' });
});

// Handle CPU create on POST.
exports.cpu_create_post = [
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
  body('name', 'Name must be specified').trim().isLength({ min: 1 }).escape(),
  body('model', 'Model name must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('socket', 'Socket name must be specified')
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
      res.render('cpu_form', {
        title: 'Create Processor',
        cpuItem: req.body,
        errors: errors.array(),
      });
      return;
    }

    const newcpu = new CPU({
      brand: req.body.brand,
      type: req.body.type,
      series: req.body.series,
      name: req.body.name,
      model: req.body.model,
      socket: req.body.socket,
      dateFirstAvailable: req.body.dateFirstAvailable,
    });
    await newcpu.save();
    res.redirect(`/inventory-app/cpu/${newcpu._id}`);
  }),
];

// Display CPU delete form on GET.
exports.cpu_delete_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: cpu delete GET');
});

// Handle CPU delete on POST.
exports.cpu_delete_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: cpu delete POST');
});

// Display CPU update form on GET.
exports.cpu_update_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: cpu update GET');
});

// Handle CPU update on POST.
exports.cpu_update_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: cpu update POST');
});
