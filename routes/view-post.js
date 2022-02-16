const express = require('express');

const router = express.Router();

const viewPostController = require('../controllers/view-post');

router.get('/view-post/:circleId/:postId', viewPostController.getPost);

module.exports = router;