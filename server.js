const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// routes variables
const indexRoutes = require('./routes/index');
const createCircleRoutes = require('./routes/create-circle');
const discoverRoutes = require('./routes/discover');

// setting view paths and view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// importing models
const Circle = require('./models/circles');
const sequelize = require('./util/database');

// Code for Auth0

// const { auth } = require('express-openid-connect');

// const config = {
//     authRequired: false,
//     auth0Logout: true,
//     secret: 'a long, randomly-generated string stored in env',
//     baseURL: 'http://localhost:3000',
//     clientID: 'TtrlKMMX4zfjKVPQuZ96Hd95BOq4EMw8',
//     issuerBaseURL: 'https://dev-jbxgq0fu.us.auth0.com'
// };

// // auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(auth(config));

// // req.isAuthenticated is provided from the auth router
// app.get('/', (req, res) => {
//     res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });

// importing routes
app.use(indexRoutes);
app.use(createCircleRoutes);
app.use(discoverRoutes);

// creating tables and dropping if they don't exist, will remove force: true after development
sequelize
    .sync()
    .then(result => {
        app.listen(PORT, console.log(`Server is up on port ${PORT}`));
    })
    .catch(err => {
        console.log(err);
    });

