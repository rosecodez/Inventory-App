// routes/caseRouter.js

const express = require('express');
const router = express.Router();
const Case = require('../models/case');

// Display list of all cases
router.get('/', async (req, res, next) => {
  try {
    const allCases = await Case.find().sort({ model: 1 }).exec();
    res.render('case_list', { title: 'Case List', caseList: allCases });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
