const path = require('path');

const express = require('express');

const router = express.Router();


router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'third_room.html'));
});


module.exports = router;
