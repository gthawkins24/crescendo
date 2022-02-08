const path = require('path');

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json())
app.use(express.urlencoded());

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`);
});