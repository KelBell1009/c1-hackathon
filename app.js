const express = require('express');
const path = require('path');

const app = express();

const index = require('./routes/index'); // Handle our requests in routes/index.js

app.use(express.static(path.join(__dirname, 'public'))); // Expose the public folder
app.set('views', path.join(__dirname, 'views')); // Specify our view folder explicitly

app.engine('html', require('ejs').renderFile);

app.use('/', index); // Serve the index page.

app.listen(3000, function () {
    console.log('Started on port 3000!');
});


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