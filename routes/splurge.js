const express = require('express');
const request = require('superagent');
const router = express.Router();
const utils = require('../nessieUtils').use('4e7fe49f0f5ba28b8c28032a43551d7b', '5995a81dceb8abe24251849e');

router.get('/', (req, res, next) => {
    request.get(utils.urlWrap('customers/5995a81dceb8abe24251849e'))
    .end((err, returnedRes) => {
        res.json(returnedRes.body.address.street_number.trim().split(','));
    });
});

router.post('/', (req, res, next) => {
    request.put(utils.urlWrap('customers/5995a81dceb8abe24251849e'))
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
    request.get(utils.urlWrap('customers/5995a81dceb8abe24251849e'))
    .end((err, returnedRes) => {
        let json = returnedRes.body.address;
        let splurgeList = json.street_number.trim() + ',';
        let listToAppend = req.body.join(',').filter(entry => entry.trim() != '');
        let result = splurgeList + listToAppend;
        json.street_number = result;
        request.put(utils.urlWrap('customers/5995a81dceb8abe24251849e'))
        .send({
            'address': {
                'street_number': result,
                'street_name': 'Pennsylvania Ave',
                'city': 'Washington',
                'state': 'DC',
                'zip': '20500'
            }
        })
        .end((err, returnedRes2) => {
            res.json(returnedRes2);
        });
    });
});

router.delete('/', (req, res, next) => {
    request.put(utils.urlWrap('customers/5995a81dceb8abe24251849e'))
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