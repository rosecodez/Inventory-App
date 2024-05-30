// app.js

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const Case = require('./models/case');
const CPU = require('./models/cpu');
const Fan = require('./models/fan');
const GPU = require('./models/gpu');
const Memory = require('./models/memory');
const Motherboard = require('./models/motherboard');
const PSU = require('./models/psu');

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
  await deleteDuplicates(); // Call function to delete duplicates
}

const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
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

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

// Delete duplicates in database
async function deleteDuplicates() {
  const collections = [
    'cases',
    'cpus',
    'fans',
    'gpus',
    'memories',
    'motherboards',
    'psus',
  ];
  for (let collectionName of collections) {
    await deleteDuplicatesInCollection(collectionName);
  }
}

async function deleteDuplicatesInCollection(collectionName) {
  let Model;

  switch (collectionName) {
    case 'cases':
      Model = Case;
      break;
    case 'cpus':
      Model = CPU;
      break;
    case 'fans':
      Model = Fan;
      break;
    case 'gpus':
      Model = GPU;
      break;
    case 'memories':
      Model = Memory;
      break;
    case 'motherboards':
      Model = Motherboard;
      break;
    case 'psus':
      Model = PSU;
      break;

    default:
      throw new Error(`Unknown collection name: ${collectionName}`);
  }

  const aggregationResult = await Model.aggregate([
    {
      $group: {
        _id: { model: '$model' },
        uniqueIds: { $addToSet: '$_id' },
        count: { $sum: 1 },
      },
    },
    {
      $match: {
        count: { $gt: 1 },
      },
    },
  ]).exec();

  aggregationResult.forEach(async function (doc) {
    doc.uniqueIds.shift();
    await Model.deleteMany({ _id: { $in: doc.uniqueIds } });
    console.log(`Duplicates removed from ${collectionName}`);
  });
}

// export app
module.exports = app;
