const express = require('express');
const request = require('superagent');
const router = express.Router();
const utils = require('../nessieUtils').use('4e7fe49f0f5ba28b8c28032a43551d7b', '59963e18ceb8abe24251ae8c');

router.get('/', (req, res, next) => {
    request.get(utils.urlWrap('customers/59963e18ceb8abe24251ae8c'))
    .end((err, returnedRes) => {
        res.json(returnedRes.body.address.street_number.trim().split(','));
    });
});

router.post('/', (req, res, next) => {
    request.put(utils.urlWrap('customers/59963e18ceb8abe24251ae8c'))
    .send({
        'address': {
            'street_number': req.body.trim().join(',')
        }
    })
    .end((err, returnedRes2) => {
        res.json(returnedRes2);
    });
});

router.put('/', (req, res, next) => {
    request.get(utils.urlWrap('customers/59963e18ceb8abe24251ae8c'))
    .end((err, returnedRes) => {
        let json = returnedRes.body.address;
        let splurgeList = json.street_number.trim() + ',';
        let listToAppend = req.body.join(',');
        let result = splurgeList + listToAppend;
        json.street_number = result;
        request.put(utils.urlWrap('customers/59963e18ceb8abe24251ae8c'))
        .send({
            'address': json
        })
        .end((err, returnedRes2) => {
            res.json(returnedRes2);
        });
    });
});

router.delete('/', (req, res, next) => {
    request.put(utils.urlWrap('customers/59963e18ceb8abe24251ae8c'))
    .send({
        'address': {
            'street_number': ' '
        }
    })
    .end((err, returnedRes2) => {
        console.log(returnedRes2);
    });
});

module.exports = router;