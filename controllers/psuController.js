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
exports.psu_create_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: psu create POST');
});

// Display psu delete form on GET.
exports.psu_delete_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: psu delete GET');
});

// Handle psu delete on POST.
exports.psu_delete_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: psu delete POST');
});

// Display psu update form on GET.
exports.psu_update_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: psu update GET');
});

// Handle psu update on POST.
exports.psu_update_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: psu update POST');
});
