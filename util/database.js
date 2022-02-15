const Sequelize = require('sequelize');

const sequelize = new Sequelize ('crescendo_db', 'root', process.env.PASSWORD, {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});

module.exports = sequelize;