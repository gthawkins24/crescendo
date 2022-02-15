const Sequelize = require('sequelize');

let sequelize;

if(process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize ('crescendo_db', 'root', process.env.PASSWORD, {
    dialect: 'mysql',
    host: 'localhost',
    port: process.env.PORT || 3001
    });
}
module.exports = sequelize;