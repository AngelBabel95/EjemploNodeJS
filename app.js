var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var packageRouter = require('./routes/package');
/*Conexion mongo*/
var mongoose = require('mongoose');
const nameDB = process.env.DB || 'test';
mongoose.connect(`mongodb://localhost/${nameDB}`)

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/packages', packageRouter);

app.use('/', packageRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.error;
  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
