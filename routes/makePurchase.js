const express = require('express');
const request = require('superagent');
const router = express.Router();
const utils = require('../nessieUtils').use('4e7fe49f0f5ba28b8c28032a43551d7b', '5995a81dceb8abe24251849e');

router.post('/', (req, res, next) => {
    request.post(utils.urlWrap('accounts/5995b1f0ceb8abe2425184a5/purchases')).send(req.body).end((err, returnedRes) => {
        res.json(returnedRes);
    });
});

module.exports = router;