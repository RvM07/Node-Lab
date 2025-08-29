const http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    let pattern = '';
    for(let i=8; i>=1; i--){
        pattern += "*".repeat(i) + '\n';
    }
    res.write(pattern);
    res.end();
}).listen(3000);