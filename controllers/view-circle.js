const { Follow, User, Circle } = require('../models');
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