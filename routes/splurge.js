const express = require('express');
const request = require('superagent');
const router = express.Router();

// Handle GET request for index page.
router.post('/', (req, res, next) => {
    request.post('http://api.reimaginebanking.com/accounts/5995b1f0ceb8abe2425184a5/purchases?key=4e7fe49f0f5ba28b8c28032a43551d7b').send(req.body).end((err, returnedRes) => {
        res.json(returnedRes);
    });
});

module.exports = router;