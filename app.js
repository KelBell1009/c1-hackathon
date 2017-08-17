const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
// const fs = require('fs');
const app = express();
const index = require('./routes/index'); // Handle our requests in routes/index.js
const makePurchase = require('./routes/makePurchase');
const utils = require('./nessieUtils').use('4e7fe49f0f5ba28b8c28032a43551d7b', '5995a81dceb8abe24251849e');
const request = require('superagent');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(path.join(__dirname, 'public'))); // Expose the public folder
app.set('views', path.join(__dirname, 'views')); // Specify our view folder explicitly
app.engine('html', require('ejs').renderFile);
app.use('/', index); // Serve the index page.
app.use('/makePurchase', makePurchase);
app.listen(3000, function () {
    console.log('Started on port 3000!');

});


//sample URL is http://api.reimaginebanking.com/customers/5995a81dceb8abe24251849e/accounts?key=4e7fe49f0f5ba28b8c28032a43551d7b.
//input parameter is the 'customers/5995a81dceb8abe24251849e/accounts' part.
function urlWrap(input) {
    return 'http://api.reimaginebanking.com/' + input + '?key=4e7fe49f0f5ba28b8c28032a43551d7b';
}

var customerID = '5995a81dceb8abe24251849e'; //Donald Trump's ID

function buyRandStuff(accountID, number_of_items) {
    request.get(urlWrap('accounts/' + accountID)).end(function (err, res) {
        var accountName = '';
        var accountType = '';
        if (err || !res.ok) {
            console.log('Oh no! error');
        } else {
            accountName = res.body.nickname;
            accountType = res.body.type;
        }
        // console.log(res.body);
        for (var i = 0; i < number_of_items; i++) {
            var singleMerch = merchants.results[i];
            console.log(singleMerch);
            request.post(urlWrap('accounts/' + accountID + '/purchases')).send({
                'merchant_id': singleMerch._id,
                'medium': 'balance',
                'purchase_date': '2017-08-17',
                'amount': 5,
                'description': accountType + ',' + accountName + ',' + singleMerch.name
            }).end();
        }
    });
}
//id1 is payer, id2 is payee
function transferMoney(id1, id2, amount) {
    request.post(urlWrap("accounts/" + id1 + "/transfers")).send({
        "medium": "balance",
        "payee_id": id2,
        "amount": amount,
        "transaction_date": "2017-08-17",
        "description": "transfer of" + amount + "dollars from " + id1 + " to " + id2
    }).end();
}

// buyRandStuff("5995d38aceb8abe242519a60", 6);



request.post(urlWrap('customers/' + customerID + '/accounts')).send({
    'type': 'Credit Card',
    'nickname': 'Bob',
    'rewards': 0,
    'balance': 500000,
    'account_number': '5185139221386420'
}).end();

// request.get(urlWrap('customers')).end(function (err, res) {
//     if (err || !res.ok) {
//         console.log('Oh no! error');
//     } else {
//         console.log('yay got ' + JSON.stringify(res.body));
//     }
// });

// console.log(urlWrap('customers/' + customerID + '/accounts'));

// request.post().send({
//         'first_name': 'Donald',
//         'last_name': 'Trump',
//         'address': {
//             'street_number': '1600',
//             'street_name': 'Pennsylvania Ave',
//             'city': 'Washington',
//             'state': 'DC',
//             'zip': '20500'
//         }
//     })
//     .end();