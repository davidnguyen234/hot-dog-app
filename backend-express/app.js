var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const indexRouter = require('./routes/index');
const colorsRouter = require('./routes/colors');
const carsRouter = require('./routes/cars');
const appsRouter = require('./routes/apps');
const usersRouter = require('./routes/users');
const petsRouter = require('./routes/pets');
const citiesRouter = require('./routes/cities');


var cors = require('cors');

var testAPIRouter = require('./routes/testAPI');

var app = express();


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

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/testAPI', testAPIRouter);

//our routes

app.use('/', indexRouter);
app.use('/colors', colorsRouter);
app.use('/cars', carsRouter);
app.use('/apps', appsRouter);
app.use('/users', usersRouter);
app.use('/pets', petsRouter);
app.use('/cities', citiesRouter);

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
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'DATABASE_NAME_HERE',
  password: 'YOUR_PASSWORD_HERE'
});

// simple query
connection.query(
  'SELECT * FROM `animals`',
  function (err, results) {
    if (err) {
      console.log(err);
    }
    console.log(results); // results contains rows returned by server

  }
);


module.exports = app;
