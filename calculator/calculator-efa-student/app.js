var express = require('express');
var app = express();
var bodyParser = require("body-parser");

var add = require('./controllers/add-controller');
var subtract = require('./controllers/subtract-controller');
var multiply = require('./controllers/multiply-controller');
var divide = require('./controllers/divide-controller');

app.use(bodyParser.json());

app.use('/add', add);
app.use('/subtract', subtract);
app.use('/multiply', multiply);
app.use('/divide', divide);

app.listen(3000, function () {
    console.log('App listening on port 3000');
});
