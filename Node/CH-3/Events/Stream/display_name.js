const http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Class:TY - BCA - C \n Name: Reetesh More');
    res.end();
}).listen(3000);