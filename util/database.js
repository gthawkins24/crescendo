const Sequelize = require('sequelize');

const sequelize = new Sequelize ('crescendo_db', 'root', process.env.PASSWORD, {
    dialect: 'mysql',
    host: 'localhost',
    port: process.env.PORT || 3001
});

module.exports = sequelize;