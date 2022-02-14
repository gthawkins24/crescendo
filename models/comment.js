const { Model, DataTypes } = require('sequelize');
const seuqelize = require('../util/database');

class Comment extends Model {};

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false
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
        modelName: 'comment'
    }
);

module.exports = Comment;