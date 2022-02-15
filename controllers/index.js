const sequelize = require("../util/database");
const { Circle, User, Follow } = require("../models");

exports.displayFollowedCircles = (req, res, next) => {
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
        return Circle.findAll({ where: { id: followedIdsArray } });
    })
    .then(followedCircles => {
        res.render('index', {
            circs: followedCircles,
            pageTitle: 'Crescendo', 
            path: '/'
        })
    })
    .catch(err => console.log(err));
};

exports.postUnfollow = (req, res, next) => {
    const userNickname = req.oidc.user.nickname;
    const circleId = req.body.circleId;

    User.findAll({ where: {username: userNickname} })
    .then(user => {
        const UserId = user[0].id;
        return Follow.findAll({ where: { user_id: UserId, circle_id: circleId} })        
    })
    .then(circle => {
        const toBeDeletedCircle = circle[0];
        toBeDeletedCircle.destroy();
        res.redirect('/');
    })
    .catch(err => console.log(err));
}