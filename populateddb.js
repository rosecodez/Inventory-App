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
  model,
  type,
  series,
  color,
  dateFirstAvailable
) {
  const caseDetail = {
    index: index,
    brand: brand,
    model: model,
    type: type,
    series: series,
    color: color,
    dateFirstAvailable: dateFirstAvailable,
  };
  const newCase = new Case(caseDetail);
  await newCase.save();
  cases[index] = newCase;
}

async function createCases() {
  console.log('Adding cases');
  await Promise.all([
    createCase(
      0,
      'SAMA',
      'None',
      'ATX Full Tower',
      'NEVIEW 4503',
      'White',
      '2024-01-16'
    ),
    createCase(
      1,
      'Corsair',
      '4000D Airflow',
      'ATX Mid Tower',
      'none',
      'Black',
      '2020-05-14'
    ),
    createCase(
      2,
      'Fractal Design',
      'North',
      'ATX Mid Tower',
      'none',
      'Charcoal black',
      '2022-12-07'
    ),
    createCase(
      3,
      'NZXT',
      'CM-H91FB-01',
      'ATX Mid Tower',
      'H9 Flow - All Black',
      'Black',
      '2020-05-14'
    ),
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
  console.log('Adding CPUs');
  await Promise.all([
    createCPU(
      0,
      'AMD',
      'Desktop',
      'Ryzen 9 7950X3d',
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
      'n/a',
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
  brand,
  model,
  gpuInterface,
  series,
  gpu,
  dateFirstAvailable
) {
  const existingGPU = await GPU.findOne({ brand: brand, model: model });

  if (existingGPU) {
    console.log(`GPU ${brand} ${model} already exists. Skipping creation.`);
    gpus[index] = existingGPU;
    return existingGPU;
  }

  const gpuDetail = {
    index: index,
    brand: brand,
    model: model,
    gpuInterface: gpuInterface,
    series: series,
    GPU: gpu,
    dateFirstAvailable: dateFirstAvailable,
  };
  const gpuObj = new GPU(gpuDetail);
  await gpuObj.save();
  gpus[index] = gpuObj;
  return gpuObj;
}

async function createGPUs() {
  console.log('Adding GPUs');
  const addedGPUs = await Promise.all([
    createGPU(
      0,
      'AMD',
      'RX6600 CLD 8G',
      'PCI Express 4.0',
      'AMD Radeon RX 6000 Series',
      'Radeon RX 6600',
      '2021-09-13'
    ),
    createGPU(
      1,
      'GIGABYTE',
      'GV-N4070WF3OC-12GD',
      'PCI Express 4.0 x16',
      'WINDFORCE',
      'GeForce RTX 4070',
      '2023-04-12'
    ),
    createGPU(
      2,
      'ASUS',
      'DUAL-RTX3060-O12G-V2',
      'PCI Express 4.0',
      'Dual',
      'GeForce RTX 3060',
      '2021-07-09'
    ),
    createGPU(
      3,
      'ASUS',
      'TUF-RTX4070TI-12G-GAMING',
      'PCI Express 4.0',
      'NVIDIA GeForce RTX 40 Series',
      'GeForce RTX 4070 Ti',
      '2023-01-05'
    ),
  ]);

  console.log('Added GPUs:', addedGPUs);
  for (let i = 0; i < addedGPUs.length; i++) {
    gpus[i] = addedGPUs[i];
  }
}

async function createMemory(
  index,
  brand,
  type,
  series,
  model,
  capacity,
  speed,
  dateFirstAvailable
) {
  const memoryDetail = {
    index: index,
    brand: brand,
    type: type,
    series: series,
    model: model,
    capacity: capacity,
    speed: speed,
    dateFirstAvailable: dateFirstAvailable,
  };
  const memory = new Memory(memoryDetail);
  await memory.save();
  memories[index] = memory;
}

async function createMemories() {
  console.log('Adding memories');
  await Promise.all([
    createMemory(
      0,
      'G.SKILL',
      '288-Pin PC RAM',
      'Trident Z5 RGB Series',
      'F5-6000J3636F16GX2-TZ5RK',
      '32GB (2 x 16GB)',
      'DDR5 6000 (PC5 48000)',
      '2022-01-20'
    ),
    createMemory(
      1,
      'CORSAIR',
      '288-Pin PC RAM',
      'CORSAIR VENGEANCE RGB PRO',
      'CMW32GX4M2D3600C18',
      '32GB (2 x 16GB)',
      'DDR4 3600 (PC4 28800)',
      '2019-12-26'
    ),
    createMemory(
      2,
      'CORSAIR',
      '262-Pin DDR5 SO-DIMM',
      'Vengeance',
      'CMSX64GX5M2A4800C40',
      '64GB (2 x 32GB)',
      '	DDR5 4800 (PC4 38400)',
      '2022-04-13'
    ),
    createMemory(
      3,
      'G.SKILL',
      '260-Pin DDR4 SO-DIMM',
      'Ripjaws Series',
      'F4-3200C22D-64GRS',
      '64GB (2 x 32GB)',
      'DDR4 3200 (PC4 25600)',
      '2020-08-17'
    ),
  ]);
}

async function createMotherboard(
  index,
  brand,
  model,
  CPUSocketType,
  CPUType,
  chipset,
  dateFirstAvailable
) {
  const motherboardDetail = {
    index: index,
    brand: brand,
    model: model,
    CPUSocketType: CPUSocketType,
    CPUType: CPUType,
    chipset: chipset,
    dateFirstAvailable: dateFirstAvailable,
  };
  const motherboard = new Motherboard(motherboardDetail);
  await motherboard.save();
  motherboards[index] = motherboard;
}

async function createMotherboards() {
  console.log('Adding motherboards');
  await Promise.all([
    createMotherboard(
      0,
      'ASRock',
      'AM5',
      'B650M Pro RS WiFi',
      'Supports AMD Socket AM5 Ryzen 7000 Series Processors',
      'AMD B650',
      '2024-04-04'
    ),
    createMotherboard(
      1,
      'ASUS',
      'ROG STRIX B650E-E GAMING WIFI',
      'AM5',
      'Supports AMD Ryzen 7000 Series Desktop Processors',
      'AMD B650E',
      '2022-10-10'
    ),
    createMotherboard(
      2,
      'ASUS',
      'TUF GAMING B550M-PLUS',
      'AM4',
      'BIOS update might require for AMD Zen 3 Ryzen 5000 series CPU. Refer to ASUS website for CPU support list.',
      'AMD B550',
      '2024-03-12'
    ),
    createMotherboard(
      3,
      'ASRock',
      'B650E PG-ITX WIFI',
      'AM5',
      'Supports AMD Ryzen 7000 Series Processors',
      'AMD B650E',
      '2022-10-10'
    ),
  ]);
}

async function createPSU(
  index,
  brand,
  model,
  type,
  series,
  color,
  maxPower,
  dateFirstAvailable
) {
  const psuDetail = {
    index: index,
    brand: brand,
    model: model,
    type: type,
    series: series,
    color: color,
    maxPower: maxPower,
    dateFirstAvailable: dateFirstAvailable,
  };
  const psu = new PSU(psuDetail);
  await psu.save();
  psus[index] = psu;
}

async function createPSUs() {
  console.log('Adding psus');
  await Promise.all([
    createPSU(
      0,
      'CORSAIR',
      'CP-9020263-NA',
      'ATX',
      'RM850e',
      'Black',
      '850W',
      '2023-03-09'
    ),
    createPSU(
      1,
      'Super Flower',
      'CP-9020200-NA',
      'ATX12V / EPS12V',
      'Leadex III',
      'Black',
      '850W',
      '2021-05-06'
    ),
    createPSU(
      2,
      'SeaSonic',
      'PS-TPD-0850FNFAGU-P',
      'Intel ATX 12 V',
      'FOCUS GX',
      'Black',
      '1000W',
      '2018-01-15'
    ),
    createPSU(
      3,
      'SAMA',
      '1000W',
      'ATX (ATX 3.0 Compatible)',
      'Black Hole Series',
      'White',
      '1000W',
      '2024-05-05'
    ),
  ]);
}
