const express = require('express');
const router = express.Router();

// GET home page.
router.get('/', function (req, res) {
  res.redirect('/inventory-app');
});

module.exports = router;
