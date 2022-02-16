const { Model, DataTypes } = require('sequelize');
const sequelize = require('../util/database');

class User extends Model {};

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        underscored: true,
        freezeTableName: true,
        modelName: 'user'
    }
);

module.exports = User;