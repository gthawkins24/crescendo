const { Model, DataTypes } = require('sequelize');
const sequelize = require('../util/database');

class Post extends Model {};

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
        },
        title: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        imageUrl: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        underscored: true,
        freezeTableName: true,
        modelName: 'post'
    }
)

module.exports = Post;