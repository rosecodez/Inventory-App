#!/usr/bin/env node

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

async function createCase(
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
  // case is reserved in JavaScript so using 'ccase'
  const ccase = new Case(casedetail);
  await ccase.save();
  cases[index] = ccase;
}

async function createCases() {
  console.log('Adding cases');
  await Promise.all([
    createCase(
      0,
      'Corsair',
      'ATX Mid Tower',
      '4000D Airflow',
      'Black',
      '2020-05-14'
    ),
    createCase(
      1,
      'Fractal Design',
      'ATX Mid Tower',
      'North',
      'Charcoal black',
      '2022-12-07'
    ),
    createCase(
      2,
      'NZXT',
      'ATX Mid Tower',
      'H9 Flow - All Black',
      'Black',
      '2020-05-14'
    ),
    createCase(3, 'SAMA', 'ATX Full Tower', 'None', 'White', '2024-01-16'),
  ]);
}

async function createCPU(
  index,
  brand,
  type,
  series,
  name,
  model,
  socket,
  dateFirstAvailable
) {
  const cpuDetail = {
    index: index,
    brand: brand,
    type: type,
    series: series,
    name: name,
    model: model,
    socket: socket,
    dateFirstAvailable: dateFirstAvailable,
  };
  const cpu = new CPU(cpuDetail);
  await cpu.save();
  CPUs[index] = cpu;
}

async function createCPUs() {
  console.log('Adding cpus');
  await Promise.all([
    createCPU(
      0,
      'AMD',
      'Desktop',
      'Ryzen 9 7950X3d',
      '100-100000908WOF',
      'Socket AM5',
      '2023-02-28'
    ),
    createCPU(
      1,
      'Intel',
      'Desktop',
      'Core i9-14900K',
      'Core i9-14900K',
      'BX8071514900K',
      'LGA 1700',
      '2023-10-16'
    ),
    createCPU(
      2,
      'AMD',
      'Desktop',
      'Ryzen 9 7000 Series',
      'Ryzen 9 7950X',
      '100-100000514WOF',
      'Socket AM5',
      '2022-09-27'
    ),
    createCPU(
      3,
      'Intel',
      'Desktop',
      'Core i9 14th Gen',
      'Core i9-14900KF',
      'BX8071514900KF',
      'LGA 1700',
      '2023-09-16'
    ),
  ]);
}

async function createFan(
  index,
  brand,
  type,
  model,
  series,
  fanCounts,
  rpm,
  airFlow,
  noiseLevel,
  LED,
  dimensions,
  dateFirstAvailable
) {
  const fanDetail = {
    index: index,
    brand: brand,
    type: type,
    model: model,
    series: series,
    fanCounts: fanCounts,
    rpm: rpm,
    airFlow: airFlow,
    noiseLevel: noiseLevel,
    LED: LED,
    dimensions: dimensions,
    dateFirstAvailable: dateFirstAvailable,
  };
  const fan = new Fan(fanDetail);
  await fan.save();
  fans[index] = fan;
}

async function createFans() {
  console.log('Adding fans');
  await Promise.all([
    createFan(
      0,
      'Lian Li',
      'Case Fan',
      'n/a',
      'n/a',
      '3 Fans',
      'n/a',
      'n/a',
      'n/a',
      'RGB',
      'n/a',
      '2022-08-04'
    ),
    createFan(
      1,
      'Noctua',
      'Fan & Heatsinks',
      'NH-D15 chromax.black',
      'n/a',
      '1',
      '1500 RPM±10%',
      '82.52CFM',
      '24.6dB(A)',
      '165 mm',
      '2019-11-07'
    ),
    createFan(
      2,
      'Corsair',
      'Case Fan',
      'iCUE SP120 RGB ELITE Triple Fan Kit',
      '3 Fans',
      '550 - 1500 +/- 10% RPM',
      '16.91 - 47.73 CFM',
      '18 - 26.5 dBA',
      'RGB',
      '120.00 x 120.00 x 25.00 mm',
      '2021-04-07'
    ),
    createFan(
      3,
      'Deepcool',
      'Fan & Heatsinks',
      'n/a',
      '1',
      '500~1850 RPM+/-10%',
      '68.99CFM',
      '<=28 db(A)',
      'Non-LED',
      '120.00 x 120.00 x 25.00mm',
      '2022-05-03'
    ),
  ]);
}
async function createGPU(
  index,
  model,
  gpuInterface,
  series,
  gpu,
  dateFirstAvailable
) {
  const gpuDetail = {
    index: index,
    model: model,
    gpuinterface: gpuInterface,
    series: series,
    GPU: gpu,
    dateFirstAvailable: dateFirstAvailable,
  };
  const gpuObj = new GPU(gpuDetail);
  await gpuObj.save();
  gpus[index] = gpuObj;
}

async function createGPUs() {
  console.log('Adding gpus');
  await Promise.all([
    createGPU(
      0,
      'RX6600 CLD 8G',
      'PCI Express 4.0',
      'AMD Radeon RX 6000 Series',
      'Radeon RX 6600',
      '2021-09-13'
    ),
    createGPU(
      1,
      'GV-N4070WF3OC-12GD',
      'PCI Express 4.0 x16',
      'WINDFORCE',
      'GeForce RTX 4070',
      '2023-04-12'
    ),
    createGPU(
      2,
      'DUAL-RTX3060-O12G-V2',
      'PCI Express 4.0',
      'Dual',
      'GeForce RTX 3060',
      '2021-07-09'
    ),
    createGPU(
      3,
      'TUF-RTX4070TI-12G-GAMING',
      'PCI Express 4.0',
      'NVIDIA GeForce RTX 40 Series',
      'GeForce RTX 4070 Ti',
      '2023-01-05'
    ),
  ]);
}
