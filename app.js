const express = require('express');
const path = require('path');

const app = express();

const index = require('./routes/index'); // Handle our requests in routes/index.js

app.use(express.static(path.join(__dirname, 'public'))); // Expose the public folder
app.set('views', path.join(__dirname, 'views')); // Specify our view folder explicitly

app.use('/', index); // Serve the index page.

app.listen(3000, function () {
    console.log('Started on port 3000!');
});


var request = require('superagent');
request.get('http://api.reimaginebanking.com/atms?key=4e7fe49f0f5ba28b8c28032a43551d7b').end(function (err, res) {
    if (err || !res.ok) {
        console.log('Oh no! error');
    } else {
        console.log('yay got ' + JSON.stringify(res.body));
    }
});