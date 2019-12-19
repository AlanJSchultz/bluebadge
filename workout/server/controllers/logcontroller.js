//jshint esversion:8

var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user.js');

var LogModel = sequelize.import('../models/log.js');


// create a workout log 
router.post('/', function (req, res) {
    var owner = req.user.id;
    var description = req.body.log.description;
    var definition = req.body.log.definition;
    var result = req.body.log.result;

    LogModel.create({
        description: description,
        definition: definition,
        result: result,
        owner: owner
    }).then(
        function createSuccess(description) {
            res.json({
                description: description,
                definition: definition,
                result: result
            });
        },
        function createError(err) {
            res.send(500, err.message);
        }
    );
});


// gets all logs for an individual
router.get('/', function (req, res) {
    
});


// gets individual logs by id for an individual user
router.get('/:id', function (req, res) {
    
});


// allows individual logs to be updated by a user
router.put('/:id', function (req, res) {
    
});


// allows individual logs to be deleted by a user
router.delete('/:id', function (req, res) {
    
});


module.exports = router;
