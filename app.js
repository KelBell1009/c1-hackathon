const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
// const fs = require('fs');
const app = express();
const index = require('./routes/index'); // Handle our requests in routes/index.js
const settings = require('./routes/settings');
const transaction = require('./routes/transaction');
const statistics = require('./routes/statistics');
const makePurchase = require('./routes/makePurchase');
const splurge = require('./routes/splurge');
const utils = require('./nessieUtils').use('4e7fe49f0f5ba28b8c28032a43551d7b', '59963e18ceb8abe24251ae8c');
const request = require('superagent');
const getTransactions = require('./routes/getTransactions');
const getChecking = require('./routes/getChecking');
const getSavings = require('./routes/getSavings');
const getDonations = require('./routes/getDonations');
const getTransactionsByMerchant = require('./routes/getTransactionsByMerchant');
const getAmountByMerchant = require('./routes/getAmountByMerchant');
const magic = require('./routes/magic');

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(path.join(__dirname, 'public'))); // Expose the public folder
app.set('views', path.join(__dirname, 'views')); // Specify our view folder explicitly
app.engine('html', require('ejs').renderFile);
app.use('/', index); // Serve the index page.
app.use('/magic', magic);
app.use('/settings', settings);
app.use('/getTransactions', getTransactions);
app.use('/getTransactionsByMerchant', getTransactionsByMerchant);
app.use('/getAmountByMerchant', getAmountByMerchant);
app.use('/getChecking', getChecking);
app.use('/getSavings', getSavings);
app.use('/getDonations', getDonations);

app.use('/transactions', transaction);
app.use('/statistics', statistics);
app.use('/makePurchase', makePurchase);
app.use('/splurge', splurge);
app.listen(app.get('port'), function () {
    console.log('Started on port ' + app.get('port') + '!');
});

utils.transferMoney(utils.checkingAccountID, "59965bfaceb8abe24251b67b", 5);
// var dict = utils.filterTransactions("5995ff26ceb8abe24251ad1c");
// console.log(dict);
// utils.deleteAllAccounts();
// utils.createAccount("Checking", "Main Checking", 100000);
// utils.createAccount("Savings", "Life Savings for RETIREMENT", 0);

// for (var i = 0; i < 100; i++) {
//     utils.buyRandStuff("59963f42ceb8abe24251ae8e");
// }
// request.post(utils.urlWrap("")).send({
//         'first_name': 'Princess',
//         'last_name': 'Leia',
//         'address': {
//             'street_number': '1020',
//             'street_name': 'Coasdf;kl',
//             'city': 'Washington',
//             'state': 'DC',
//             'zip': '20500'
//         }
//     })
//     .end();