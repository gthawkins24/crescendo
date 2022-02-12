const Sequelize = require('sequelize');

const sequelize = new Sequelize ('crescendo_db', 'root', 'ChPiAr121191$', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;