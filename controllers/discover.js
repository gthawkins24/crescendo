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

