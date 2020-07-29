const path = require('path');

const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'intro.html'));
});


module.exports = router;
