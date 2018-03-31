var http = require('http');

var server = http.createServer();
server.on('request', function (request, response) {
    response.write('<body>');
    response.write('<h1>Hello world!</h1>');
    response.write('</body>');
    response.end();
});
server.listen(9000);
