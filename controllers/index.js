const User = require("../models/user");
const sequelize = require("../util/database");

exports.getIndex = (req, res, next) => {
    console.log('heyo');
    res.render('index', {
        pageTitle: 'Crescendo',
        path: '/'
    })
    next();
};