var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    if (request.method === 'GET' && request.url === '/hello') {
        response.write('<h1>Hello world!</h1>');
        response.end();
    } else {
        response.statusCode = 404;
        response.write('<h1>404: Bad address</h1>');
        response.end();
    }
});

server.listen(9000);
