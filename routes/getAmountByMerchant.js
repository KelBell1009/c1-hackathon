const express = require('express');
const request = require('superagent');
const router = express.Router();
const utils = require('../nessieUtils').use('4e7fe49f0f5ba28b8c28032a43551d7b', '59963e18ceb8abe24251ae8c');

router.post('/', (req, res, next) => {
    request.get(utils.urlWrap('merchants/' + req.body.merchantID + '/accounts/' + utils.checkingAccountID + '/purchases'))
        .end((err, returnedRes) => {
            let sum = 0;
            console.log(returnedRes.body)
            let results = returnedRes.body;
            results.forEach(x => {
                sum += x.amount;
            });
            res.json(sum);
        });
});

module.exports = router;