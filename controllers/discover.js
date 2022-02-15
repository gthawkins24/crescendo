const { Follow, User } = require('../models');
const Circle = require('../models/circle');
const { Op } = require('sequelize')

// exports.getCircles = (req, res, next) => {
//     Circle.findAll()
//     .then(circles => {
//         res.render('discover/discover', {
//             circs: circles,
//             pageTitle: 'Discover',
//             path: '/discover'
//         });
//     }).catch(err => console.log(err));
// };

exports.getCircles = (req, res, next) => {
    const userNickname = req.oidc.user.nickname;
    
    User.findAll({ where: {username: userNickname} 
    })
    .then(userName => {
        return Follow.findAll({ where: { user_id: userName[0].id } })
    })
    .then(followed => {
        let followedIdsArray = [];

        followed.forEach(circle => {
            followedIdsArray.push(circle.dataValues.circle_id);
        });
        return followedIdsArray;
    })
    .then(followedIdsArray => {
        return Circle.findAll({ 
            where: { 
                id: {
                    [Op.not]: followedIdsArray }
                }
        });
    })
    .then(followedCircles => {
        res.render('discover/discover', {
            circs: followedCircles,
            pageTitle: 'Discover', 
            path: '/discover'
        })
    })
    .catch(err => console.log(err));
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