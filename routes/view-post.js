const express = require('express');

const router = express.Router();

const viewPostController = require('../controllers/view-post');

router.get('/view-post/:circleId/:postId', viewPostController.getComments);

router.get('/view-post/:circleId/:postId', viewPostController.getPost);

router.post('/view-post/:circleId/:postId', viewPostController.postComment);

module.exports = router;