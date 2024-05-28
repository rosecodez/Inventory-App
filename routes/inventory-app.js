const express = require('express');
const router = express.Router();

// Require controller modules.
const case_controller = require('../controllers/caseController');
const cpu_controller = require('../controllers/cpuController');
const fan_controller = require('../controllers/fanController');
const gpu_controller = require('../controllers/gpuController');
const memory_controller = require('../controllers/memoryController');
const motherboard_controller = require('../controllers/motherboardController');
const psu_controller = require('../controllers/psuController');

/// 1. ----------  Case routes  ---------- ///
// GET request for the case home page.
router.get('/cases', case_controller.index);

// GET request for creating a case. NOTE This must come before routes that display case (uses id).
router.get('/case/create', case_controller.case_create_get);

// POST request for creating case.
router.post('/case/create', case_controller.case_create_post);

// GET request to delete case.
router.get('/case/:id/delete', case_controller.case_delete_get);

// POST request to delete case.
router.post('/case/:id/delete', case_controller.case_delete_post);

// GET request to update case.
router.get('/case/:id/update', case_controller.case_update_get);

// POST request to update case.
router.post('/case/:id/update', case_controller.case_update_post);

// GET request for one case.
router.get('/case/:id', case_controller.case_detail);

// GET request for list of all case items.
router.get('/case', case_controller.case_list);

/// 2. ----------  Cpu routes  ---------- ///
// GET request for the cpu home page.
router.get('/cpus', cpu_controller.index);

// GET request for creating a cpu. NOTE This must come before routes that display cpu (uses id).
router.get('/cpu/create', cpu_controller.cpu_create_get);

// POST request for creating cpu.
router.post('/cpu/create', cpu_controller.cpu_create_post);

// GET request to delete cpu.
router.get('/cpu/:id/delete', cpu_controller.cpu_delete_get);

// POST request to delete cpu.
router.post('/cpu/:id/delete', cpu_controller.cpu_delete_post);

// GET request to update cpu.
router.get('/cpu/:id/update', cpu_controller.cpu_update_get);

// POST request to update cpu.
router.post('/cpu/:id/update', cpu_controller.cpu_update_post);

// GET request for one cpu.
router.get('/cpu/:id', cpu_controller.cpu_detail);

// GET request for list of all cpu items.
router.get('/cpu', cpu_controller.cpu_list);

/// 3. ----------  Fan routes  ---------- ///
// GET request for the fan home page.
router.get('/fans', fan_controller.index);

// GET request for creating a fan. NOTE This must come before routes that display fan (uses id).
router.get('/fan/create', fan_controller.fan_create_get);

// POST request for creating fan.
router.post('/fan/create', fan_controller.fan_create_post);

// GET request to delete fan.
router.get('/fan/:id/delete', fan_controller.fan_delete_get);

// POST request to delete fan.
router.post('/fan/:id/delete', fan_controller.fan_delete_post);

// GET request to update fan.
router.get('/fan/:id/update', fan_controller.fan_update_get);

// POST request to update fan.
router.post('/fan/:id/update', fan_controller.fan_update_post);

// GET request for one fan.
router.get('/fan/:id', fan_controller.fan_detail);

// GET request for list of all fan items.
router.get('/fan', fan_controller.fan_list);

/// 4. ----------  GPU routes  ---------- ///
// GET request for the gpu home page.
router.get('/gpus', gpu_controller.index);

// GET request for creating a gpu. NOTE This must come before routes that display gpu (uses id).
router.get('/gpu/create', gpu_controller.gpu_create_get);

// POST request for creating gpu.
router.post('/gpu/create', gpu_controller.gpu_create_post);

// GET request to delete gpu.
router.get('/gpu/:id/delete', gpu_controller.gpu_delete_get);

// POST request to delete gpu.
router.post('/gpu/:id/delete', gpu_controller.gpu_delete_post);

// GET request to update gpu.
router.get('/gpu/:id/update', gpu_controller.gpu_update_get);

// POST request to update gpu.
router.post('/gpu/:id/update', gpu_controller.gpu_update_post);

// GET request for one gpu.
router.get('/gpu/:id', gpu_controller.gpu_detail);

// GET request for list of all gpu items.
router.get('/gpu', gpu_controller.gpu_list);

/// 5. ----------  Memory routes  ---------- ///
// GET request for the memory home page.
router.get('/memories', memory_controller.index);

// GET request for creating a memory. NOTE This must come before routes that display memory (uses id).
router.get('/memory/create', memory_controller.memory_create_get);

// POST request for creating memory.
router.post('/memory/create', memory_controller.memory_create_post);

// GET request to delete memory.
router.get('/memory/:id/delete', memory_controller.memory_delete_get);

// POST request to delete memory.
router.post('/memory/:id/delete', memory_controller.memory_delete_post);

// GET request to update memory.
router.get('/memory/:id/update', memory_controller.memory_update_get);

// POST request to update memory.
router.post('/memory/:id/update', memory_controller.memory_update_post);

// GET request for one memory.
router.get('/memory/:id', memory_controller.memory_detail);

// GET request for list of all memory items.
router.get('/memory', memory_controller.memory_list);

/// 6. ----------  Motherboard routes  ---------- ///
// GET request for the motherboard home page.
router.get('/motherboards', motherboard_controller.index);

// GET request for creating a motherboard. NOTE This must come before routes that display motherboard (uses id).
router.get(
  '/motherboard/create',
  motherboard_controller.motherboard_create_get
);

// POST request for creating motherboard.
router.post(
  '/motherboard/create',
  motherboard_controller.motherboard_create_post
);

// GET request to delete motherboard.
router.get(
  '/motherboard/:id/delete',
  motherboard_controller.motherboard_delete_get
);

// POST request to delete motherboard.
router.post(
  '/motherboard/:id/delete',
  motherboard_controller.motherboard_delete_post
);

// GET request to update motherboard.
router.get(
  '/motherboard/:id/update',
  motherboard_controller.motherboard_update_get
);

// POST request to update motherboard.
router.post(
  '/motherboard/:id/update',
  motherboard_controller.motherboard_update_post
);

// GET request for one motherboard.
router.get('/motherboard/:id', motherboard_controller.motherboard_detail);

// GET request for list of all motherboard items.
router.get('/motherboard', motherboard_controller.motherboard_list);

/// 7. ----------  PSU routes  ---------- ///
// GET request for the psu home page.
router.get('/psus', psu_controller.index);

// GET request for creating a psu. NOTE This must come before routes that display psu (uses id).
router.get('/psu/create', psu_controller.psu_create_get);

// POST request for creating psu.
router.post('/psu/create', psu_controller.psu_create_post);

// GET request to delete psu.
router.get('/psu/:id/delete', psu_controller.psu_delete_get);

// POST request to delete psu.
router.post('/psu/:id/delete', psu_controller.psu_delete_post);

// GET request to update psu.
router.get('/psu/:id/update', psu_controller.psu_update_get);

// POST request to update psu.
router.post('/psu/:id/update', psu_controller.psu_update_post);

// GET request for one psu.
router.get('/psu/:id', psu_controller.psu_detail);

// GET request for list of all psu items.
router.get('/psu', psu_controller.psu_list);

module.exports = router;
const express = require('express');
const router = express.Router();

// Require controller modules.
const case_controller = require('../controllers/caseController');
const cpu_controller = require('../controllers/cpuController');
const fan_controller = require('../controllers/fanController');
const gpu_controller = require('../controllers/gpuController');
const memory_controller = require('../controllers/memoryController');
const motherboard_controller = require('../controllers/motherboardController');
const psu_controller = require('../controllers/psuController');

/// 1. ----------  Case routes  ---------- ///
// GET request for the case home page.
router.get('/cases', case_controller.index);

// GET request for creating a case. NOTE This must come before routes that display case (uses id).
router.get('/case/create', case_controller.case_create_get);

// POST request for creating case.
router.post('/case/create', case_controller.case_create_post);

// GET request to delete case.
router.get('/case/:id/delete', case_controller.case_delete_get);

// POST request to delete case.
router.post('/case/:id/delete', case_controller.case_delete_post);

// GET request to update case.
router.get('/case/:id/update', case_controller.case_update_get);

// POST request to update case.
router.post('/case/:id/update', case_controller.case_update_post);

// GET request for one case.
router.get('/case/:id', case_controller.case_detail);

// GET request for list of all case items.
router.get('/case', case_controller.case_list);

/// 2. ----------  Cpu routes  ---------- ///
// GET request for the cpu home page.
router.get('/cpus', cpu_controller.index);

// GET request for creating a cpu. NOTE This must come before routes that display cpu (uses id).
router.get('/cpu/create', cpu_controller.cpu_create_get);

// POST request for creating cpu.
router.post('/cpu/create', cpu_controller.cpu_create_post);

// GET request to delete cpu.
router.get('/cpu/:id/delete', cpu_controller.cpu_delete_get);

// POST request to delete cpu.
router.post('/cpu/:id/delete', cpu_controller.cpu_delete_post);

// GET request to update cpu.
router.get('/cpu/:id/update', cpu_controller.cpu_update_get);

// POST request to update cpu.
router.post('/cpu/:id/update', cpu_controller.cpu_update_post);

// GET request for one cpu.
router.get('/cpu/:id', cpu_controller.cpu_detail);

// GET request for list of all cpu items.
router.get('/cpu', cpu_controller.cpu_list);

/// 3. ----------  Fan routes  ---------- ///
// GET request for the fan home page.
router.get('/fans', fan_controller.index);

// GET request for creating a fan. NOTE This must come before routes that display fan (uses id).
router.get('/fan/create', fan_controller.fan_create_get);

// POST request for creating fan.
router.post('/fan/create', fan_controller.fan_create_post);

// GET request to delete fan.
router.get('/fan/:id/delete', fan_controller.fan_delete_get);

// POST request to delete fan.
router.post('/fan/:id/delete', fan_controller.fan_delete_post);

// GET request to update fan.
router.get('/fan/:id/update', fan_controller.fan_update_get);

// POST request to update fan.
router.post('/fan/:id/update', fan_controller.fan_update_post);

// GET request for one fan.
router.get('/fan/:id', fan_controller.fan_detail);

// GET request for list of all fan items.
router.get('/fan', fan_controller.fan_list);

/// 4. ----------  GPU routes  ---------- ///
// GET request for the gpu home page.
router.get('/gpus', gpu_controller.index);

// GET request for creating a gpu. NOTE This must come before routes that display gpu (uses id).
router.get('/gpu/create', gpu_controller.gpu_create_get);

// POST request for creating gpu.
router.post('/gpu/create', gpu_controller.gpu_create_post);

// GET request to delete gpu.
router.get('/gpu/:id/delete', gpu_controller.gpu_delete_get);

// POST request to delete gpu.
router.post('/gpu/:id/delete', gpu_controller.gpu_delete_post);

// GET request to update gpu.
router.get('/gpu/:id/update', gpu_controller.gpu_update_get);

// POST request to update gpu.
router.post('/gpu/:id/update', gpu_controller.gpu_update_post);

// GET request for one gpu.
router.get('/gpu/:id', gpu_controller.gpu_detail);

// GET request for list of all gpu items.
router.get('/gpu', gpu_controller.gpu_list);

/// 5. ----------  Memory routes  ---------- ///
// GET request for the memory home page.
router.get('/memories', memory_controller.index);

// GET request for creating a memory. NOTE This must come before routes that display memory (uses id).
router.get('/memory/create', memory_controller.memory_create_get);

// POST request for creating memory.
router.post('/memory/create', memory_controller.memory_create_post);

// GET request to delete memory.
router.get('/memory/:id/delete', memory_controller.memory_delete_get);

// POST request to delete memory.
router.post('/memory/:id/delete', memory_controller.memory_delete_post);

// GET request to update memory.
router.get('/memory/:id/update', memory_controller.memory_update_get);

// POST request to update memory.
router.post('/memory/:id/update', memory_controller.memory_update_post);

// GET request for one memory.
router.get('/memory/:id', memory_controller.memory_detail);

// GET request for list of all memory items.
router.get('/memory', memory_controller.memory_list);

/// 6. ----------  Motherboard routes  ---------- ///
// GET request for the motherboard home page.
router.get('/motherboards', motherboard_controller.index);

// GET request for creating a motherboard. NOTE This must come before routes that display motherboard (uses id).
router.get(
  '/motherboard/create',
  motherboard_controller.motherboard_create_get
);

// POST request for creating motherboard.
router.post(
  '/motherboard/create',
  motherboard_controller.motherboard_create_post
);

// GET request to delete motherboard.
router.get(
  '/motherboard/:id/delete',
  motherboard_controller.motherboard_delete_get
);

// POST request to delete motherboard.
router.post(
  '/motherboard/:id/delete',
  motherboard_controller.motherboard_delete_post
);

// GET request to update motherboard.
router.get(
  '/motherboard/:id/update',
  motherboard_controller.motherboard_update_get
);

// POST request to update motherboard.
router.post(
  '/motherboard/:id/update',
  motherboard_controller.motherboard_update_post
);

// GET request for one motherboard.
router.get('/motherboard/:id', motherboard_controller.motherboard_detail);

// GET request for list of all motherboard items.
router.get('/motherboard', motherboard_controller.motherboard_list);

/// 7. ----------  PSU routes  ---------- ///
// GET request for the psu home page.
router.get('/psus', psu_controller.index);

// GET request for creating a psu. NOTE This must come before routes that display psu (uses id).
router.get('/psu/create', psu_controller.psu_create_get);

// POST request for creating psu.
router.post('/psu/create', psu_controller.psu_create_post);

// GET request to delete psu.
router.get('/psu/:id/delete', psu_controller.psu_delete_get);

// POST request to delete psu.
router.post('/psu/:id/delete', psu_controller.psu_delete_post);

// GET request to update psu.
router.get('/psu/:id/update', psu_controller.psu_update_get);

// POST request to update psu.
router.post('/psu/:id/update', psu_controller.psu_update_post);

// GET request for one psu.
router.get('/psu/:id', psu_controller.psu_detail);

// GET request for list of all psu items.
router.get('/psu', psu_controller.psu_list);

module.exports = router;
