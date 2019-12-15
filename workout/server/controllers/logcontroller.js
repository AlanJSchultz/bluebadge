//jshint esversion:8

var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var Log = sequelize.import('../models/log.js');
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");



module.exports = router;
