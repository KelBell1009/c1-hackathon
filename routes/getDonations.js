const express = require('express');
const request = require('superagent');
const router = express.Router();
const utils = require('../nessieUtils').use('4e7fe49f0f5ba28b8c28032a43551d7b', '59963e18ceb8abe24251ae8c');

router.get('/', (req, res, next) => {
    request.get(utils.urlWrap('accounts/' + utils.donationsAccountID))
        .end((err, returnedRes) => {
            res.json(returnedRes.body);
        });
});
module.exports = router;