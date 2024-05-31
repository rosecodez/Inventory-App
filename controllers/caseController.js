const Case = require('../models/case');
const asyncHandler = require('express-async-handler');

// Display list of all cases
exports.case_list = asyncHandler(async (req, res, next) => {
  const allCases = await Case.find().sort({ model: 1 }).exec();
  console.log('Fetched cases:', allCases);
  res.render('case_list', { title: 'Case List', allCases });
});

// Display detail page for a specific case
exports.case_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Case detail: ${req.params.id}`);
});

// Display case create form on GET
exports.case_create_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Case create GET');
});

// Handle case create on POST
exports.case_create_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Case create POST');
});

// Display case delete form on GET
exports.case_delete_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Case delete GET');
});

// Handle case delete on POST
exports.case_delete_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Case delete POST');
});

// Display case update form on GET
exports.case_update_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Case update GET');
});

// Handle case update on POST
exports.case_update_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Case update POST');
});
