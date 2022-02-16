const express = require('express');

const router = express.Router();

const viewCircleController = require('../controllers/view-circle');

router.get('/view-circle/:circleId', viewCircleController.getCircle);

router.post('/view-circle/:circleId', viewCircleController.postNewPost);

module.exports = router;