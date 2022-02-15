// import models
const User = require('./user');
const Follow = require('./follow');
const Comment = require('./comment');
const Post = require('./post');
const Circle = require('./circle');

// creating associations
// User.hasMany(Post, {
//     foreignKey: 'user_id'
// });

// Post.belongsTo(User, {
//     foreignKey: 'user_id',
// });

// Post.belongsTo(Circle, {
//     foreignKey: 'circle_id'
// });

Circle.belongsToMany(User, {
    through: Follow,

    foreignKey: 'circle_id'
});

User.belongsToMany(Circle, {
    through: Follow,
    
    foreignKey: 'user_id'
});

module.exports = { User, Follow, Comment, Post, Circle };