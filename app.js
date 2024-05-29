// module imports
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

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// route handling
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/inventory-app', inventoryAppRouter);

// 404 error handling
app.use((req, res, next) => {
  next(createError(404));
});

// error handler middleware
app.use((err, req, res, next) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

// export app
module.exports = app;
