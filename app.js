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