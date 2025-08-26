var http = require('http');
const url = require('url');

http.createServer((res,req)=>{
    var myurl = url.parse(req.url,true);

    switch(myurl.pathname){
        case "/":

        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post>');
        res.write('<input type=file placeholder="upload file"/>')
        res.write('<button type=submit">Submit</button></form>')
        break;

        case "fileupload":
            console.log('Successfully Uploaded.');
            break;
    }
});