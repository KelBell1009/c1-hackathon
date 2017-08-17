const request = require('superagent');
const merchants = require('./merchants.json').results;
const merchSubset = require('./merchantssubset.json').results;
module.exports.use = (apiKey, customerID) => {

    function urlWrap(input) {
        return 'http://api.reimaginebanking.com/' + input + '?key=' + apiKey;
    };

    function deleteAccount(accountID) {
        request.delete(urlWrap('accounts/' + accountID)).end((err, res) => {
            return res.body;
        });
    };

    function deleteAllAccounts() {
        request.get(urlWrap('accounts/')).end((err, res) => {
            console.log(res.body);
            let results = res.body;
            results.forEach((account) => {
                deleteAccount(account._id);
            });
        })
    };

    function createAccount(type, nickname, balance) {
        request.post(urlWrap('customers/' + customerID + '/accounts')).send({
            'type': type,
            'nickname': nickname,
            'rewards': 0,
            'balance': balance
        }).end();
    };

    function buyRandStuff(accountID) {
        request.get(urlWrap('accounts/' + accountID)).end((err, res) => {
            let accountName = '';
            let accountType = '';
            if (err || !res.ok) {
                console.log('Oh no! error');
            } else {
                accountName = res.body.nickname;
                accountType = res.body.type;
            }
            // console.log(res.body);
            // merchants.forEach((singleMerch) => {
            var randNum = Math.floor(Math.random() * merchSubset.length);
            singleMerch = merchSubset[randNum];
            // console.log(singleMerch);
            var randCost = Math.floor(Math.random() * 30) + 5;
            request.post(urlWrap('accounts/' + accountID + '/purchases')).send({
                'merchant_id': singleMerch._id,
                'medium': 'balance',
                'purchase_date': '2017-08-17',
                'amount': randCost,
                'description': accountType + ',' + accountName + ',' + singleMerch.name
            }).end();
            // });
        });
    };
    //id1 is payer, id2 is payee
    function transferMoney(id1, id2, amount) {
        request.post(urlWrap("accounts/" + id1 + "/transfers")).send({
            "medium": "balance",
            "payee_id": id2,
            "amount": amount,
            "transaction_date": "2017-08-17",
            "description": "transfer of" + amount + "dollars from " + id1 + " to " + id2
        }).end();
    };

    function filterTransactions(accountID) {
        var dict = {};
        request.get(urlWrap('accounts/' + accountID + '/purchases')).end((err, res) => {
            // console.log(res.body);
            let results = res.body;
            for (var i = 0; i < results.length; i++) {
                var name = results[i].description.split(",")[2];
                // console.log(name);
                if (name in dict) {
                    dict[name] += results[i].amount;
                    // console.log(name + " : " + dict[name]);
                } else {
                    dict[name] = results[i].amount;
                }
            }
        });
        return dict;
    };

    return {
        buyRandStuff: buyRandStuff,
        urlWrap: urlWrap,
        createAccount: createAccount,
        deleteAccount: deleteAccount,
        deleteAllAccounts: deleteAllAccounts,
        transferMoney: transferMoney,
        filterTransactions: filterTransactions
    }
};