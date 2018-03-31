var fs = require('fs');
var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', 'utf-8', function(err, data) {
            if (err) throw err;
            response.write(data);
            response.end();
        });
    } else if (request.method === 'GET' && request.url === '/hello') {
        response.write('<h1>Hello world!</h1>');
        response.end();
    } else {
        response.writeHead(404, {'Content-Type': 'image/png'});
        fs.readFile('./images/404.png', function(err, data) {
            if (err) throw err;
            //response.write(data);
            response.end(data);
        });
    }
});

server.listen(9000);
