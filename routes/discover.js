const express = require('express');

const router = express.Router();

const discoverController = require('../controllers/discover');

router.get('/discover', discoverController.getCircles);

router.post('/discover', discoverController.postFollowCircle);

module.exports = router;