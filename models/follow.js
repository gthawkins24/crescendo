const { Model, DataTypes } = require('sequelize');
const sequelize = require('../util/database');

Follow.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        circle_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'circle',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'follow'
    }
);

module.exports = Follow;