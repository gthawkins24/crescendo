const path = require('path');

const express = require('express');

const router = express.Router();

const indexController = require('../controllers/index');

router.get('/', indexController.getIndex);

router.get('/', (req, res) => {
    console.log(req.oidc.isAuthenticated());
    res.render("index", {
        title: "Crescendo", 
        isAuthenticated: req.oidc.isAuthenticated()
    });
});

module.exports = router;