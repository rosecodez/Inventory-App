#! /usr/bin/env node

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Case = require('./models/case');
const CPU = require('./models/cpu');
const Fan = require('./models/fan');
const GPU = require('./models/gpu');
const Memory = require('./models/memory');
const Motherboard = require('./models/motherboard');
const PSU = require('./models/psu');

const CPUs = [];
const cases = [];
const fans = [];
const gpus = [];
const memories = [];
const motherboards = [];
const psus = [];

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log('Debug: About to connect');
  await mongoose.connect(mongoDB);
  console.log('Debug: Should be connected?');
  await createCases();
  await createCPUs();
  await createFans();
  await createGPUs();
  await createMemories();
  await createMotherboards();
  await createPSUs();
  console.log('Debug: Closing mongoose');
  mongoose.connection.close();
}

async function createCases(
  index,
  brand,
  type,
  series,
  color,
  dateFirstAvailable
) {
  const casedetail = {
    index: index,
    brand: brand,
    type: type,
    series: series,
    color: color,
    dateFirstAvailable: dateFirstAvailable,
  };
  // case is reserved in javascript so using 'ccase'
  const ccase = new Book(casedetail);
  await ccase.save();
  cases[index] = ccase;
}
async function createCases() {
  console.log('Adding cases');
  await Promise.all([
    createCases(
      0,
      'Corsair',
      'ATX Mid Tower',
      '4000D Airflow',
      'Black',
      '2020-05-14'
    ),
    createCases(
      1,
      'Fractal Design',
      'ATX Mid Tower',
      'North',
      'Charcoal black',
      '2022-12-07'
    ),
    createCases(
      2,
      'NZXT',
      'ATX Mid Tower',
      'H9 Flow - All Black',
      'Black',
      '2020-05-14'
    ),
    createCases(3, 'SAMA', 'ATX Full Tower', 'None', 'White', '2024-01-16'),
  ]);
}
