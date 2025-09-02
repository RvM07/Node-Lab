const http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    let n1 = 0;
    let n2 = 1;
    let n3;
    
    res.write('Fibonacci Series: ' + n1 + ', ' + n2);

    let i = 1;
    while(i <= 10) {
        n3 = n1 + n2;
        res.write(', ' + n3);
        n1 = n2;
        n2 = n3;
        i++;
    }

    res.write(fibSeries);
    res.end();
}).listen(5000,()=>{
    console.log('Server is listening on http://localhost:5000/');
});