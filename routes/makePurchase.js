const express = require('express');
const request = require('superagent');
const router = express.Router();
const utils = require('../nessieUtils').use('4e7fe49f0f5ba28b8c28032a43551d7b', '5995a81dceb8abe24251849e');

router.get('/', (req, res, next) => {
    request.post(utils.urlWrap('customers/5995a81dceb8abe24251849e')).send(req.body).end((err, returnedRes) => {
        console.log(returnedRes);
    });
});

module.exports = router;