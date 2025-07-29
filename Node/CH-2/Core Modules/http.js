var http = require('http');
var server = http.createServer(function (req, res) {
    res.write('Hello Everyone!');
    res.write('<br>Good Afternoon');

    res.end();
});
server.listen(2007, () => {console.log("Server Running")});