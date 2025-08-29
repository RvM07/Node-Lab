const http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    let n1 = 0;
    let n2 = 1;
    let n3;
    
    let fibSeries = 'Fibonacci Series: ' + n1 + ', ' + n2;
    
    for(let i = 2; i < 10; i++) {
        n3 = n1 + n2;
        fibSeries += ', ' + n3;
        n1 = n2;
        n2 = n3;
    }
    
    res.write(fibSeries);
    res.end();
}).listen(3000);
