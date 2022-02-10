const express = require('express');

const router = express.Router();

const createCircleController = require('../controllers/create-circle');

router.get('/create-circle', createCircleController.getCreateCircle);

router.post('/create-circle', createCircleController.postCreateCircle);

module.exports = router;