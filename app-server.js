var express = require('express');
var http = require("http");
var app = express();
var server = http.createServer(app).listen(3000);
var io = require("socket.io")(server);
var routes = require('./routes');

app.set('view engine' , 'ejs');
app.use(express.static('./public')); //serving static files from server
app.use(express.static('./node_modules/bootstrap/dist'));

io.on("connection", function(socket) {

	socket.on("chat", function(message){
		socket.broadcast.emit("chat message", message);
	});

	socket.emit("message", "Welcome to Cyber Chat");
});



