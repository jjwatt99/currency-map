var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database/db');
var Money = require('../database/money');
var app = express();

app.use(express.static(__dirname + '/../public'));

app.get('/money', function(req, res) {
	Money.find(function (err, data) {
	  if (err) return console.error(err);
	  res.json(data);
	});
});
// app.get('/', function(req, res) {
//   res.redirect('/login');
// });

// app.get('/login', function(req, res) {
// 	res.send('hello');
// });

app.listen(3000, function() {
  console.log('listening on port 3000!');
});