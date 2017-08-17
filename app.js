const express = require('express')
const app = express()
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

var key = "?key=4e7fe49f0f5ba28b8c28032a43551d7b";
var category = "customers";
var urlFirst = "http://api.reimaginebanking.com/";

// var request = require('superagent');

var request = require('superagent');

// request.get('http://api.reimaginebanking.com/atms?key=4e7fe49f0f5ba28b8c28032a43551d7b').end(function (err, res) {
//     if (err || !res.ok) {
//         console.log('Oh no! error');
//     } else {
//         console.log('yay got ' + JSON.stringify(res.body));
//     }
// });

var url = urlFirst + category + key;
console.log(url);


request.post(url).send({
        "first_name": "Donald",
        "last_name": "Trump",
        "address": {
            "street_number": "1600",
            "street_name": "Pennsylvania Ave",
            "city": "Washington",
            "state": "DC",
            "zip": "20500"
        }
    })
    .end();