
var http=require('http');
var uc=require('upper-case');
var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(uc.upperCase("Hello World!"));
    res.end();
});
server.listen(2008);