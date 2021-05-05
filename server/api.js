const express = require('express');
const router = express.Router();
const path = require('path');

router.use('/photos', require('./api/photos'));
router.use('/blog-posts', require('./api/blog-posts'));

module.exports = router;