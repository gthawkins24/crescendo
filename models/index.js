// import models
const User = require('./user');
const Follow = require('./follow');
const Comment = require('./comment');
const Post = require('./post');
const Circle = require('./circle');

// creating associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

User.belongsToMany(Circle, {
    through: Follow,
    as: 'followed_circles',

    foreignKey: 'user_id',
});

Circle.belongsToMany(User, {
    through: Follow,
    as: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});



module.exports = { User, Follow, Comment, Post, Circle };