var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
    var num1 = Number(req.body.data.number1);
    var num2 = Number(req.body.data.number2);
    var total = num2 - num1;
    res.send(total.toString());
});

module.exports = router;
