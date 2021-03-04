var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');


// Starting server
var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// INITALIZING THE ROUTES
const indexRouter = require('./routes/index');
const cartsRouter = require('./routes/carts')
const vendorRouter = require('./routes/vendor');
const orderRouter = require('./routes/order');
let itemsRouter = require('./routes/items');
const menuRouter = require('./routes/menu');

// CALLING THE ROUTES
app.use('/', indexRouter);
app.use('/items', itemsRouter);
app.use('/carts', cartsRouter);
app.use('/vendor', vendorRouter);
app.use('/order', orderRouter);
app.use('/menu', menuRouter);

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
  res.json('error');
});

module.exports = app;