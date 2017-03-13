var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/currency');

var db = mongoose.connection;
db.on('error', function(error) {
  console.log('connection error: ', error);
});
db.once('open', function() {
  console.log('We are connected to the shortly database');
});

var moneySchema = mongoose.Schema({
  euro: Number,
  yen: Number,
  pound: Number,
  franc: Number
});

module.exports = db;