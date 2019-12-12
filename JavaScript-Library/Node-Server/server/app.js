var express = require('express'); 
// 1 - require the use of the express npm package that we've installed in our dependencies

var app = express(); 
// 2 - We create an instance of express. We're actually firing off a top-level express() function, a function exported by the Express
// module.This allows us to create an Express app.

var test = require('./controllers/testcontroller');
//1 - We import the route object that we just created and store it in a variable called test .

// 1. Create a sequelize variable that imports the db file.
var sequelize = require('./db');

// 2. Use the variable and call .sync().
// This method will ensure that we sync all defined models to the DB.
sequelize.sync();  // tip: pass in {force: true} for resetting tables


//3 - app.listen will use express to start a UNIX socket and listen for connections on the given path. This method is identical to Node’s
// http.Server.listen().
           //4 - The given path is localhost:3000 .

app.get("/api/test", function (req, res) {
    res.send('This is from the api test route');
});

app.get("/", function (req, res) {
    res.send('Hello');
});

app.use('/testing-controllers', test);

app.get("/about-me", function (req, res) {
    res.send("I am old enough");
});

app.listen(3000, function () {
    console.log('Hey man! App is listening on 3000'); // 5 - We call a callback function when the connection happens with a simple console.log .
});

app.use('/api/test', function (req, res) { // fire off an Express function res.send .
    res.send("This is data from the /api/test endpoint. It's from the server.");
});

/* 
2. We call app.use and in the first parameter create a base url called / test.
So our base url will look like this: http: //localhost:3000/test
3. For our second parameter for the use() function, we pass in test.
This means that all routes created in the testcontroller.js file will be sub - routes.
It will look like this: http: //localhost:3000/test or http://localhost:3000/test/
*/
           //2   //3
app.use('/test', test);
