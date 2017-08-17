const express = require('express');
const path = require('path');
const router = express.Router();

// Handle GET request for index page.
router.post('/', function(req, res, next) {
    console.log(req.body);
    res.json(req.body);
});

module.exports = router;