var http = require("http");

http.createServer(function(request, response) { 
    console.log('Handling HTTP request'); 
    response.writeHead(200, {'Content-Type': 'text/html'}); 
    response.write('<b>Hello World</b>');
    response.end();
}).listen(8080);

var a;
for (var i=0; i < 20000000000; i += 1) {
    a = i; 
}

console.log('For loop has finished');