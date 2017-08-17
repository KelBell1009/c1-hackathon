const express = require('express')
const app = express()




// app.get('/', function (req, res) {
//     res.send('Hello World!')
// })

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})


var request = require('superagent');
request.get('http://api.reimaginebanking.com/atms?key=4e7fe49f0f5ba28b8c28032a43551d7b').end(function (err, res) {
    if (err || !res.ok) {
        console.log('Oh no! error');
    } else {
        console.log('yay got ' + JSON.stringify(res.body));
    }
});