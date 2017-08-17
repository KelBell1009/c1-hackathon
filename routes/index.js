const express = require('express');
const path = require('path');
const router = express.Router();

// Handle GET request for index page.
router.get('/', (req, res, next) => {
    res.render('index.html');
});



module.exports = router;