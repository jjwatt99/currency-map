var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/../public'));

// app.get('/', function(req, res) {
//   res.redirect('/login');
// });

// app.get('/login', function(req, res) {
// 	res.send('hello');
// });

app.listen(3000, function() {
  console.log('listening on port 3000!');
});