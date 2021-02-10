var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const indexRouter = require('./routes/index');

var cors = require('cors');

//ROUTE FOR TESTING 
var testAPIRouter = require('./routes/testAPI');
var vendorsRouter = require('./routes/vendors');
var app = express();


const mysql = require('mysql2');
let appCred = require('../../appCred.json');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//OUR TEST ROUTE FOR TESTING DB 
app.use('/testAPI', testAPIRouter);
app.use('/vendors', vendorsRouter);
//OUR INDEX/HOME/LANDING/START ROUTE
app.use('/', indexRouter);

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

//connect to DB
// get the client

// create the connection to database
 const connection = mysql.createConnection(appCred);

// simple query
// connection.query(
//   // 'SELECT * FROM `animals`',
//   function (err, results) {
//     if (err) {
//       console.log(err);
//     }
//     console.log(results); // results contains rows returned by server

//   }
// );


module.exports = app;
