const { Follow, User, Circle, Post } = require('../models');
const { Op } = require('sequelize');

exports.getPost = (req, res, next) => {
    const circleId = req.params.circleId;
    const postId = req.params.postId;

    Post.findOne({ where: { circle_id: circleId, id: postId } })
    .then(post => {
        res.render('view-post/view-post', {
            post: post,
            pageTitle: 'Post',
            path: '/view-post'
        })
    })
    .catch(err => console.log(err));
};

exports.postComment = (req, res, next) => {

}