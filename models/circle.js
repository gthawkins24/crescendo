const { Model, DataTypes } = require('sequelize');

const sequelize = require('../util/database');

class Circle extends Model {};

Circle.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
    sequelize,
    underscored: true,
    freezeTableName: true,
    modelName: 'circle'
    }
);

module.exports = Circle;