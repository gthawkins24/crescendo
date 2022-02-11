const express = require('express');

const router = express.Router();

const indexController = require('../controllers/index');

const { auth, requiresAuth } = require('express-openid-connect');

router.get('/', requiresAuth(), indexController.getIndex);

// router.get('/', indexController.getUsername);

// router.post('/', )

module.exports = router;