const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
// const fs = require('fs');
const app = express();
const index = require('./routes/index'); // Handle our requests in routes/index.js
const makePurchase = require('./routes/makePurchase');
const splurge = require('./routes/splurge');
const utils = require('./nessieUtils').use('4e7fe49f0f5ba28b8c28032a43551d7b', '5995a81dceb8abe24251849e');
const request = require('superagent');

app.set("port", (process.env.PORT || 3000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(path.join(__dirname, 'public'))); // Expose the public folder
app.set('views', path.join(__dirname, 'views')); // Specify our view folder explicitly
app.engine('html', require('ejs').renderFile);
app.use('/', index); // Serve the index page.
app.use('/makePurchase', makePurchase);
app.use('/splurge', splurge);
app.listen(app.get('port'), function () {
    console.log('Started on port ' + app.get('port') + '!');
});
var dict = utils.filterTransactions("5995ff26ceb8abe24251ad1c");
console.log(dict);
// utils.deleteAllAccounts();
// utils.createAccount("Checking", "Main Checking", 50000);
// for (var i = 0; i < 100; i++) {
//     utils.buyRandStuff("5995ff26ceb8abe24251ad1c");
// }
request.post().send({
        'first_name': 'Donald',
        'last_name': 'Trump',
        'address': {
            'street_number': '1600',
            'street_name': 'Pennsylvania Ave',
            'city': 'Washington',
            'state': 'DC',
            'zip': '20500'
        }
    })
    .end();