const express = require('express');
const path = require('path');
const bootstrap = require('bootstrap');
const router = express.Router();

// Handle GET request for index page.
router.get('/', function(req, res, next) {
    res.render('index.html');
});



module.exports = router;