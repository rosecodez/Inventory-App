const Motherboard = require('../models/motherboard');
const asyncHandler = require('express-async-handler');

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
  res.send('NOT IMPLEMENTED: motherboard create GET');
});

// Handle motherboard create on POST.
exports.motherboard_create_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: motherboard create POST');
});

// Display motherboard delete form on GET.
exports.motherboard_delete_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: motherboard delete GET');
});

// Handle motherboard delete on POST.
exports.motherboard_delete_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: motherboard delete POST');
});

// Display motherboard update form on GET.
exports.motherboard_update_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: motherboard update GET');
});

// Handle motherboard update on POST.
exports.motherboard_update_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: motherboard update POST');
});
