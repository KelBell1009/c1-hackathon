const express = require('express');
const request = require('superagent');
const router = express.Router();
const utils = require('../nessieUtils').use('4e7fe49f0f5ba28b8c28032a43551d7b', '59963e18ceb8abe24251ae8c');

router.post('/', (req, res, next) => {
    request.get(utils.urlWrap('accounts/59963f42ceb8abe24251ae8e')).end((err, returnedRes) => {
        console.log(returnedRes)
        let body = req.body;
        body.description = returnedRes.body.type + ',' + returnedRes.body.nickname + ',' + body.description;
        request.post(utils.urlWrap('accounts/59963f42ceb8abe24251ae8e/purchases')).send(body).end((err, returnedRes2) => {
            res.json(returnedRes2);
        });
    });
});

module.exports = router;