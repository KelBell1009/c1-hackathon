const request = require('superagent');
const merchants = require('./merchants.json').results;

module.exports.use = (apiKey, customerID) => {

    function urlWrap(input) {
        return 'http://api.reimaginebanking.com/' + input + '?key=' + apiKey;
    };

    function deleteAccount(accountID) {
        request.delete(urlWrap('accounts/' + accountID)).end((err, res) => {
            return res.body;
        });
    }

    function buyRandStuff(accountID) {
        request.get(urlWrap('accounts/' + accountID)).end((err, res) => {
            let accountName = '';
            let accountType = '';
            if (err || !res.ok) {
                console.log('Oh no! error');
            }
            else {
                accountName = res.body.nickname;
                accountType = res.body.type;
            }
            // console.log(res.body);
            merchants.forEach((singleMerch) => {
                console.log(singleMerch);
                request.post(urlWrap('accounts/' + accountID + '/purchases')).send({
                    'merchant_id': singleMerch._id,
                    'medium': 'balance',
                    'purchase_date': '2017-08-17',
                    'amount': 16,
                    'description': accountType + ',' + accountName + ',' + singleMerch.name
                }).end();
            });
        });
    };

    return {
        buyRandStuff: buyRandStuff,
        urlWrap: urlWrap,
        deleteAccount: deleteAccount
    }
};