const { Follow, User, Circle, Post, Comment } = require('../models');
const { Op } = require('sequelize');

exports.getComments = (req, res, next) => {
    const circleId = req.params.circleId;
    const postId = req.params.postId;

    Comment.findAll({ where: { circle_id: circleId, post_id: postId } })
    .then(comments => {
        res.locals.comments = comments;
        next();
    })
    .catch(err => console.log(err));
};

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
    const circleId = req.params.circleId;
    const postId = req.body.postId;
    const userName = req.oidc.user.nickname;
    const commentBody = req.body.commentBody;

    User.findOne({where: { username: userName }})
    .then(user => {
        Comment.create({
            user_id: user.id,
            comment_text: commentBody,
            circle_id: circleId,
            post_id: postId,
            username: user.username
        });
    })
    .then(() => {
        res.redirect('back');
    })
    .catch(err => console.log(err));
};