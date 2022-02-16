const path = require('path');
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3001;

// routes variables
const indexRoutes = require('./routes/index');
const createCircleRoutes = require('./routes/create-circle');
const discoverRoutes = require('./routes/discover');
const viewCircleRoutes = require('./routes/view-circle');

// setting view paths and view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// importing models
const { Sequelize } = require('sequelize');
const sequelize = require('./util/database');
const Circle = require('./models/circle');
const User = require('./models/user');

// Code for Auth0
const { auth, requiresAuth } = require('express-openid-connect');

app.use(
    auth({
        authRequired: false,
        auth0Logout: true,
        issuerBaseURL: process.env.ISSUER_BASE_URL,
        baseURL: process.env.BASE_URL,
        clientID: process.env.CLIENT_ID,
        secret: process.env.SECRET,
    })
);

app.get('/', requiresAuth(), (req, res, next) => {
    let username = req.oidc.user.nickname

    sequelize.sync()
    .then(result => {
        return User.findAll({ where: {username: username} })
    })
    .then(user => {
        if (user.length > 0) {
            const existingUser = user[0].username
            console.log('already exists');
            return existingUser
        } else {
            console.log('creating new user');
            return User.create({ username: username });
        }
    })
    .then(user => {
        console.log(user);
        next();
    })
    .catch(err => {
        console.log(err);
    })
});

// importing routes
app.use(indexRoutes);
app.use(createCircleRoutes);
app.use(discoverRoutes);
app.use(viewCircleRoutes);

app.listen(PORT, console.log(`Server is up on port ${PORT}`));
