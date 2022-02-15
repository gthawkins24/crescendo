const { Follow, User } = require('../models');
const Circle = require('../models/circle');

exports.getCircles = (req, res, next) => {
    Circle.findAll()
    .then(circles => {
        res.render('discover/discover', {
            circs: circles,
            pageTitle: 'Discover',
            path: '/discover'
        });
    }).catch(err => console.log(err));
};

exports.postFollowCircle = (req, res, next) => {
    const userNickname = req.oidc.user.nickname;
    const circleId = req.body.circleId

    User.findAll({ where: {username: userNickname} })
    .then(user => {
        const UserId = user[0].id;
        Follow.create({
            user_id: UserId,
            circle_id: parseInt(circleId)
        })
        res.redirect('/');
    })
    .catch(err => console.log(err));
};