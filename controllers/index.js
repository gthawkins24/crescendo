const User = require("../models/user");
const Follow = require("../models/follow");
const sequelize = require("../util/database");
const { Circle } = require("../models");

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
        return followedIdsArray
    })
    .then(followedIdsArray => {

        return followedIdsArray.forEach(circle => Circle.findAll({ where: { id: circle } }));
    })
    .then(followedCircles => {
        console.log(followedCircles);
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