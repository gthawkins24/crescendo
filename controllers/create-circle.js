const Circle = require('../models/circle');

exports.getCreateCircle = (req, res, next) => {
    res.render('create-circle/create-circle', {
        pageTitle: 'Create Circle',
        path: '/create-circle'
    });
};

exports.postCreateCircle = (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;

    Circle.create({
        title: title,
        description: description,
        imageUrl: imageUrl
    }).then(result => {
        res.redirect('/create-circle');
    }).catch((err) => {
        const err_msg = 'A Circle With That Title Already Exists!';
        const uniqueTitleEntry = 'title must be unique';
        if (uniqueTitleEntry === err.errors[0].message) {
            console.log('Circle Already Exists!');
            return res.render('create-circle/create-circle', { 
                err_msg: err_msg,
                pageTitle: 'Create Circle',
                path: '/create-circle'
            });
        }
    });
};