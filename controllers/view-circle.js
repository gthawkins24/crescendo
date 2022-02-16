const { Follow, User, Circle, Post } = require('../models');
const { Op } = require('sequelize');

exports.getCircle = (req, res, next) => {
    const circleId = req.params.circleId;

    Circle.findByPk(circleId)
    .then(circle => {
        res.render('view-circle/view-circle', {
            circle: circle,
            pageTitle: `Crescendo: ${circle.title}`,
            path:'/view-circle'
        });
    })
    .catch(err => console.log(err));
};

exports.postNewPost = (req, res, next) => {
    const circleId = req.params.circleId;
    const title = req.params.postTitle;
    const imageUrl = req.params.imageUrl;

    Post.create({
        title: postTitle,
        imageUrl: postImageUrl,
        description: postBody,

    })
    .then(result => {
        res.redirect('/create-circle');
    })
    .catch((err) => {
        const err_msg = 'A Post With That Title Already Exists!';
        const uniqueTitleEntry = 'title must be unique';
        if (uniqueTitleEntry === err.errors[0].message) {
            console.log('Post With That title Already Exists!');
            return res.render('view-circle/view-circle/:circleId', {
                err_msg: err_msg,
                pageTitle: `Crescendo: ${circle.title}`,
                path: '/create-circle'
            });
        } else {
            return res.render('/');
        }
        console.log(err)
    });
};