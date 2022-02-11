const Circle = require('../models/circles');

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