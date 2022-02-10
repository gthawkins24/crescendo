const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const indexRouter = require('./routes/index');
const { auth } = require('express-openid-connect');
require('dotenv').config()

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASEURL,
    clientID: 'process.env.CLIENTID',
    issuerBaseURL: 'process.env.ISSUERBASEURL'
};

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(auth(config));


app.use(indexRouter);

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`);
});
