const express = require('express');

const router = express.Router();

const discoverController = require('../controllers/discover');

router.get('/discover', discoverController.getCircles);

module.exports = router;