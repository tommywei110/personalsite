const express = require('express');
const router = express.Router();
const path = require('path');

router.use('/photos', require('./api/photos'));

module.exports = router;