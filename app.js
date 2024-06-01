const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

// route imports
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const inventoryAppRouter = require('./routes/inventory-app');

// initialize express app
const app = express();

// Set up mongoose connection
mongoose.set('strictQuery', false);
const mongoDB =
  'mongodb+srv://rosebeats09:u91niXhikB8XZtir@cluster0.ng8tm4j.mongodb.net/';

mongoose
  .connect(mongoDB)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Route handling
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/inventory-app', inventoryAppRouter);

// 404 error handling
app.use((req, res, next) => {
  next(createError(404));
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

// export app
module.exports = app;
