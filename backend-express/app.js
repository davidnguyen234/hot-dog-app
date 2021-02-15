var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

var cors = require('cors');

const indexRouter = require('./routes/index');
const vendorRouter= require('./routes/vendor');
const mysql = require('mysql2');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//OUR INDEX/HOME/LANDING/START ROUTE
app.use('/', indexRouter);
app.use('/vendor', vendorRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// CONNECT TO DB
// variable that holds db credentials
let myCredentials = require('../../dbCreds.json');

// create the connection to database
const connection = mysql.createConnection(myCredentials);

// simple query
// connection.query(
//   'SELECT * FROM `vendor`',
//   function (err, results) {
//     if (err) {
//       console.log(err);
//     }
//     console.log(results); // results contains rows returned by server

//   }
// );

module.exports = app;