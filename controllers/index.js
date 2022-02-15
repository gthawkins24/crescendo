const sequelize = require("../util/database");
const { Circle, User, Follow } = require("../models");

exports.displayFollowedCircles = (req, res, next) => {
    const userNickname = req.oidc.user.nickname;
    // const userId = Follow.findAll({ where: { user_id: userName[0].id } });
    
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

// const { Op } = require("sequelize");
// Post.findAll({ where: { authorId: { [Op.eq]: 2 } } });
// // SELECT * FROM post WHERE authorId = 2;