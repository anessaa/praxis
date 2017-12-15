var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

require('dotenv').config();
require('./config/database');

var app = express();

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json());

app.use(require('./config/auth'));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/scales', require('./routes/api/scales'));
app.use('/api/practicePosts', require('./routes/api/practicePosts'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});