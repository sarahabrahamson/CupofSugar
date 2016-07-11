var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require("mongoose");

//var db = mongoose.connect('mongodb://admin:admin@ds013931.mlab.com:13931/grogro');

var routes = require('./routes/index');
var api = require('./routes/api');
var login = require('./routes/login');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// tools
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// modules
app.use('/modules', express.static(__dirname + '/node_modules/'));

// routes
app.use('/', routes);
app.use('/api', api);
app.use('/user', user);
app.use('*', routes);

// add error handling


module.exports = app;
