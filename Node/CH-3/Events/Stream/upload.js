var http = require('http');
const url = require('url');

http.createServer((req, res) => {
    var myurl = url.parse(req.url, true);

    switch(myurl.pathname){
        case "/":
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<form action="/fileupload" method="post" enctype="multipart/form-data">');
            res.write('<input type="file" name="filetoupload" placeholder="upload file"/>');
            res.write('<button type="submit">Submit</button>');
            res.write('</form>');
            res.end();
            break;

        case "/fileupload":
            res.write('File uploaded successfully!');
            res.end();
            break;
    }
}).listen(8080,()=>{
    console.log('Server is listening on http://localhost:8080/');
});