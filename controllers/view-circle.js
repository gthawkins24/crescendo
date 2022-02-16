const { Follow, User, Circle, Post } = require('../models');
const { Op } = require('sequelize');

exports.getCircle = (req, res, next) => {
    const circleId = req.params.circleId;

    Circle.findByPk(circleId)
    .then(circle => {
        res.locals.circle = circle;
        next();
    })
    .catch(err => console.log(err));
};

exports.getPosts = (req, res, next) => {
    const circleId = req.params.circleId;
    
    Post.findAll({ where: { circle_id: circleId } })
    .then(posts => {
        res.render('view-circle/view-circle', {
            posts: posts,
            pageTitle: 'Circle View',
            path: '/view-circle'
        })
    })
};

exports.postNewPost = (req, res, next) => {
    const userNickname = req.oidc.user.nickname
    const circleId = req.body.circleId;
    const title = req.body.postTitle;
    const imageUrl = req.body.postImageUrl;
    const description = req.body.postBody;

    User.findAll({ where: {username: userNickname} 
    })
    .then(user => {
        const userId = user[0].id;
        return userId
    })
    .then(userId => {
        console.log(imageUrl, description, title, circleId)
        Post.create({
            title: title,
            imageUrl: imageUrl,
            description: description,
            circle_id: circleId,
            user_id: userId
        })
    })
    .then(result => {
        res.redirect('back');
    })
    .catch((err) => {
        console.log(err);
    });
};




















        // const err_msg = 'A Post With That Title Already Exists!';
        // const uniqueTitleEntry = 'title must be unique';
        // if (uniqueTitleEntry === err.errors[0].message) {
        //     console.log('Post With That title Already Exists!');
        //     return res.render('view-circle/view-circle/:circleId', {
        //         err_msg: err_msg,
        //         pageTitle: `Crescendo: ${circle.title}`,
        //         path: '/create-circle'
        //     });
        // } else {
        //     console.log(err);
        //     return res.render('/');
        // }

        // .then(result => {
        //     res.render('view-circle/view-circle', {
        //         circle: circle,
        //         pageTitle: `Crescendo: ${circle.title}`,
        //         path:'/view-circle'
        //     });
        // })
