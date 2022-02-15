const express = require('express');

const router = express.Router();

const indexController = require('../controllers/index');

const { auth, requiresAuth } = require('express-openid-connect');

router.get('/', indexController.displayFollowedCircles);

module.exports = router;