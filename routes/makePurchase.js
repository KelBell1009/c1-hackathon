const express = require('express');
const request = require('superagent');
const router = express.Router();
const utils = require('../nessieUtils').use('4e7fe49f0f5ba28b8c28032a43551d7b', '59963e18ceb8abe24251ae8c');
var moneySent = 5;
router.post('/', (req, res, next) => {
    console.log("duck");
    request.get(utils.urlWrap('accounts/59966295ceb8abe24251b689')).end((err, returnedRes) => {
        // console.log(returnedRes);
        let body = req.body;
        body.description = returnedRes.body.type + ',' + returnedRes.body.nickname + ',' + body.description;
        request.post(utils.urlWrap('accounts/59966295ceb8abe24251b689/purchases')).send(body).end((err, returnedRes2) => {
            // punish?
            let purchase = returnedRes2.body.objectCreated;
            let descriptions = purchase.description.split(',');
            request.get(utils.urlWrap('customers/59963e18ceb8abe24251ae8c')).end((err, returnedRes3) => {
                let splurgeList = returnedRes3.body.address.street_number.trim().split(',');
                let isSplurge = descriptions.map(x => splurgeList.includes(x)).includes(true); // Make sure you don't name account type and nickname the same name as an item in the splurge list... 
                if (isSplurge) {
                    // console.log("request is: " + JSON.stringify(req.headers.isdonation));
                    if (JSON.stringify(req.headers.isdonation) == "true") {
                        utils.transferMoney(utils.checkingAccountID, utils.donationsAccountID, moneySent);
                    } else {
                        utils.transferMoney(utils.checkingAccountID, utils.savingsAccountID, moneySent);
                    }
                }
            });
        });
    });
});

module.exports = router;