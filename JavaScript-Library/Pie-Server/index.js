//jshint esversion:8

const express = require('express');
const app = express();
const piecontroller = require('./controllers/piecontroller');
const usercontroller = require('./controllers/usercontroller');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(require('./middleware/headers'));
// app.use(express.static(__dirname + '/public'));
app.use('/auth', usercontroller);
app.use(require('./middleware/validate-session'));  // bouncer
app.use('/pie', piecontroller);

app.get('/', (req, res) => res.render('index'));

app.listen(3000, () => console.log('App is listening on port 3000.'));


