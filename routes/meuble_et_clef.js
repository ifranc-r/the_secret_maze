const path = require('path');

const express = require('express');

const router = express.Router();

const getKey = require('../controllers/take_key');

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'meuble_et_clef.html'));
});

router.get('/take_key', getKey.take_key);

module.exports = router;
