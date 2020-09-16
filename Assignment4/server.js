/*
 * Write your server code in this file.
 *
 * name: Reed Boeshans
 * email: boeshanr@oregonstate.edu
 */

var http = require('http');
var fs = require('fs');

var filehtml;
var filecss;
var filejs;
var file404;

fs.readFile('public/index.html', function(err, data) {
	if(err){ throw err;}
	filehtml = data;	
});
fs.readFile('public/style.css', function(err, data) {
	if(err){ throw err;}
	filecss = data;
});
filejs = fs.readFile('public/index.js', function(err, data) {
	if(err){ throw err;}
	filejs = data;
});
file404 = fs.readFile('public/404.html', function(err, data) {
	if(err){ throw err;}
	file404 = data;
});





function requestHandler(request, response) {
	if(request.url === '/' || request.url === '/index.html') {
		response.setHeader('Content-Type', 'text/html');
		response.statusCode = 200;
		response.write(filehtml);
	}
	else if(request.url === '/style.css') {
                response.setHeader('Content-Type', 'text/css');
		response.statusCode = 200;
		response.write(filecss);
	}
	else if(request.url === '/index.js') {
                response.setHeader('Content-Type', 'application/javascript');
		response.statusCode = 200;
		response.write(filejs);
	}
	else {
                response.setHeader('Content-Type', 'text/html');
		response.statusCode = 404;
		response.write(file404);
	}
	response.end();

}

var server = http.createServer(requestHandler);
function portNum() {
//	console.log('Port env: ', process.env.PORT);
	if(process.env.PORT) {
//		console.log("port: ", process.env.PORT);
		return process.env.PORT;
	}
	else
		return 3005;
}

server.listen(portNum(), function() {
	console.log("server is running on port: ", portNum());
});
