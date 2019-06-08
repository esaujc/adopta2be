'use strict';
require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const memberRouter = require('./routes/members');

const cors = () => (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true.toString());
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, x-access-token, x-user, x-site-id, X-Requested-With, Content-Type, Accept, Authentication, Authorization'
  );
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST,HEAD, OPTIONS,PUT, DELETE, PATCH'
  );
  next();
};

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/adopta2',{ //process.env.MONGODB_URI, {   // 'mongodb://localhost/adopta2'
keepAlive: true,
useNewUrlParser: true,
useCreateIndex: true,
reconnectTries: Number.MAX_VALUE
}).then(() => {
  console.log(`Connected to database`);
}).catch((error) => {
  console.error(error);
})

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/members', memberRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
