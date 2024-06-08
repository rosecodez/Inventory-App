const Case = require('../models/case');
const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

// Display list of all cases
exports.case_list = asyncHandler(async (req, res, next) => {
  const allCases = await Case.find().sort({ model: 1 }).exec();
  res.render('case_list', { title: 'Case List', caseList: allCases });
});

// Display detail page for a specific case
exports.case_detail = asyncHandler(async (req, res, next) => {
  const caseItem = await Case.findById(req.params.id);

  if (!caseItem) {
    const err = new Error('Case not found');
    err.status = 404;
    return next(err);
  }

  res.render('case_detail', {
    title: 'Case details',
    caseItem: caseItem,
  });
});

// Display case create form on GET
exports.case_create_get = asyncHandler(async (req, res, next) => {
  res.render('case_form', { title: 'Create case' });
});

// Handle case create on POST
exports.case_create_post = [
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
  body('dateFirstAvailable', 'Invalid date')
    .optional({ checkFalsy: true })
    .isISO8601()
    .toDate(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render('case_form', {
        title: 'Create Case',
        caseItem: req.body,
        errors: errors.array(),
      });
      return;
    }

    const newCase = new Case({
      brand: req.body.brand,
      model: req.body.model,
      type: req.body.type,
      series: req.body.series,
      color: req.body.color,
      dateFirstAvailable: req.body.dateFirstAvailable,
    });
    await newCase.save();
    res.redirect(`/inventory-app/case/${newCase._id}`);
  }),
];

// Display case delete form on GET
exports.case_delete_get = asyncHandler(async (req, res, next) => {
  const caseItem = await Case.findById(req.params.id);

  if (!caseItem) {
    const err = new Error('Case not found');
    err.status = 404;
    return next(err);
  }

  res.render('case_delete', {
    title: 'Case delete',
    caseItem: caseItem,
  });
});

// Handle case delete on POST
exports.case_delete_post = asyncHandler(async (req, res, next) => {
  await Case.findByIdAndDelete(req.params.id);
  res.redirect('/inventory-app/cases');
});
// Display case update form on GET
exports.case_update_get = asyncHandler(async (req, res, next) => {
  const caseItem = await Case.findById(req.params.id);

  if (!caseItem) {
    const err = new Error('Case not found');
    err.status = 404;
    return next(err);
  }

  res.render('case_form', {
    title: 'Update case',
    caseItem: caseItem,
  });
});

// Handle case update on POST
exports.case_update_post = [
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
  body('dateFirstAvailable', 'Invalid date')
    .optional({ checkFalsy: true })
    .isISO8601()
    .toDate(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const newCase = new Case({
      _id: req.params.id,
      brand: req.body.brand,
      model: req.body.model,
      type: req.body.type,
      series: req.body.series,
      color: req.body.color,
      dateFirstAvailable: req.body.dateFirstAvailable,
    });

    if (!errors.isEmpty()) {
      res.render('case_form', {
        title: 'Update case',
        caseItem: req.body,
        errors: errors.array(),
      });
    } else {
      await Case.findByIdAndUpdate(req.params.id, newCase);
      res.redirect(newCase.url);
    }
  }),
];
