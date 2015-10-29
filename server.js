'use strict';

var express = require("express");
var app = express();
var morgan = require("morgan");
var bodyParser = require("body-parser");
var http = require('http');

var port = 8080;

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

app.listen(port, function(err) {
	
	if (err) throw err;
	
	console.log("Server listening on port " + port + "...");
	
});