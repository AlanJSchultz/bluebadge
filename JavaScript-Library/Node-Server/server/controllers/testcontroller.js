//jshint esversion:8

var express = require('express');  
// 1 - We import the Express framework and it inside the variable express . This instance becomes our gateway to using Express methods.

var router = express.Router();
/* 2 - 
We create a new variable called router.Since the express variable(line 1) gives us access into the express framework, we can
access express properties and methods by calling express + ..Therefore, when we call express.Router(), we are using the
express variable to access the Router() method. The Router() method will return a router object
for us. You can read about it more at the Express docs(https: //expressjs.com/en/4x/api.html#router) .
*/


var sequelize = require('../db');
var TestModel = sequelize.import('../models/test.js');  // 1
// 1. We import the test model and store it in TestModel variable. It is convention to use Pascal casing (uppercase on both words) for a model class with Sequelize. You'll find this to be true in other programming languages as well.


/*
3. We use the router object by using the router variable to get access into the Router() object methods.
4. get() is one of the methods in the object, and we call it here.This method allows us to complete an HTTP GET request.
We pass two arguments into the.get method.
5. The first argument is the path.In this case, the path is just a / .More on this later.
6. The second argument is a callback function.This is also sometimes called a“ handler function”.
This function gets called when the application receives a request to the specified route and HTTP method.
The application“ listens” for requests that match the specified route(s) and method(s), and when it detects a match, 
it calls the specified callback function.
*/
//3    //4  //5           //6
router.get('/', function (req, res) {

     /* 7 - Inside our callback function, we call res.send() . 
     send() is an express method that can be called on the res or response object.
      Our response parameter is just a simple string. */
    res.send('Hey!! This is a test route!');
});

   //1         //2       //3
router.get('/about', function (req, res) {
    res.send('This is an about route');  //4
});
/*
1. You can use the router instance that we 've created and call the .get method from
express to make a HTTP GET request.
2. The first parameter is the / about path that we 'll be appending to the URL. 
This will make the url look like this: http: //localhost:3000/test/about 
3. Again, we pass in a callback function that will run when the path is requested. 
So when we type in the above url, this function fires off.
4. The send() method gets called on the res object, and a simple string is
returned.
*/

// Pass in an object
router.get("/contact", function (req, res) {
    res.send({
        "user": "kenn",
        "email": "kenn@beastmode.com"
    });
});

// Pass in an array
router.get("/projects", function (req, res) {
    res.send(["Project 1", "Project 2"]);
});

// Pass in an array of objects
router.get("/mycontacts", function (req, res) {
    res.send([
        {
            "user": "quincy",
            "email": "quincy@beastmode.com"
        },
        {
            "user": "aaron",
            "email": "aaron@beastmode.com"
        },
        {
            "user": "tom",
            "email": "tome@beastmode.com"
        }
    ]);
});

router.get('/rob', function (req, res) {
    res.send('This is an about Rob'); //4
});


// * Controller Method #1: Simple Response
//     1          2
router.post('/one', function (req, res) {
//     3
    res.send("Test 1 went through!");
});
/*
1. We use the Express router object to call the post() method.This corresponds to the type of HTTP request that we are sending.POST is telling the server that the incoming request has data coming with it.You use a POST request when you sign up
for an application, send an email, send a tweet, post on a wall, etc.POST sends data through HTTP to the server, which might send the data to the database to be stored. /
2. /one will be the endpoint / route we are using.Our route will be named http: //localhost:3000/test/one. After that, we'll run a callback function, which will fire off a response.
3. When the client requests the given endpoint, we simply send a string in our response.
*/


router.post('/two', function (req, res) {
    let testData = "Test data for endpoint two";  // 2

    TestModel  // 3
        .create({  // 4
//             6
            testdata: testData  // 5
        })
        .then(dataFromDatabase => {
            res.send("Test two went through");
        });
});
/*
2. testData is going to have a fixed string that we 'll use every time a POST request comes in.
3. We use the TestModel variable to access the model that we are using.This will grant us access to the Test model properties and to Sequelize methods.
4. .create() is a Sequelize method that allows us to create an instance of the Test model and send it off to the db, as long as the data types match the model.
5. We pass the value of testData down to satisfy the key / value pair
for the model.The string that we are sending will be the value that 's stored in the variable. Currently, it is the string Test data for endpoint two;
6. testdata is the key in the object, and it represents the column being used in the table.
*/


//8 - We export the module for usage outside of the file.
module.exports = router;
