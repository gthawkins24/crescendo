const Sequelize = require('sequelize');

const sequelize = new Sequelize ('crescendo_db', 'root', '123', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;