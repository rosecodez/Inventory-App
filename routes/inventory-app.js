const express = require('express');
const router = express.Router();

// Import controller modules
const caseController = require('../controllers/caseController');
const cpuController = require('../controllers/cpuController');
const fanController = require('../controllers/fanController');
const gpuController = require('../controllers/gpuController');
const memoryController = require('../controllers/memoryController');
const motherboardController = require('../controllers/motherboardController');
const psuController = require('../controllers/psuController');

// GET inventory home page.
router.get('/', (req, res) => {
  res.redirect('/inventory-app/cases');
});

/// 1. ----------  Case routes  ---------- ///
router.get('/cases', caseController.case_list);
router.get('/case/create', caseController.case_create_get);
router.post('/case/create', caseController.case_create_post);
router.get('/case/:id/delete', caseController.case_delete_get);
router.post('/case/:id/delete', caseController.case_delete_post);
router.get('/case/:id/update', caseController.case_update_get);
router.post('/case/:id/update', caseController.case_update_post);
router.get('/case/:id', caseController.case_detail);

/// 2. ----------  CPU routes  ---------- ///
router.get('/processors', cpuController.cpu_list);
router.get('/processors/create', cpuController.cpu_create_get);
router.post('/processors/create', cpuController.cpu_create_post);
router.get('/processors/:id/delete', cpuController.cpu_delete_get);
router.post('/processors/:id/delete', cpuController.cpu_delete_post);
router.get('/processors/:id/update', cpuController.cpu_update_get);
router.post('/processors/:id/update', cpuController.cpu_update_post);
router.get('/processors/:id', cpuController.cpu_detail);

/// 3. ----------  Fan routes  ---------- ///
router.get('/fans', fanController.fan_list);
router.get('/fan/create', fanController.fan_create_get);
router.post('/fan/create', fanController.fan_create_post);
router.get('/fan/:id/delete', fanController.fan_delete_get);
router.post('/fan/:id/delete', fanController.fan_delete_post);
router.get('/fan/:id/update', fanController.fan_update_get);
router.post('/fan/:id/update', fanController.fan_update_post);
router.get('/fan/:id', fanController.fan_detail);

/// 4. ----------  GPU routes  ---------- ///
router.get('/gpus', gpuController.gpu_list);
router.get('/gpu/create', gpuController.gpu_create_get);
router.post('/gpu/create', gpuController.gpu_create_post);
router.get('/gpu/:id/delete', gpuController.gpu_delete_get);
router.post('/gpu/:id/delete', gpuController.gpu_delete_post);
router.get('/gpu/:id/update', gpuController.gpu_update_get);
router.post('/gpu/:id/update', gpuController.gpu_update_post);
router.get('/gpu/:id', gpuController.gpu_detail);

/// 5. ----------  Memory routes  ---------- ///
router.get('/memories', memoryController.memory_list);
router.get('/memory/create', memoryController.memory_create_get);
router.post('/memory/create', memoryController.memory_create_post);
router.get('/memory/:id/delete', memoryController.memory_delete_get);
router.post('/memory/:id/delete', memoryController.memory_delete_post);
router.get('/memory/:id/update', memoryController.memory_update_get);
router.post('/memory/:id/update', memoryController.memory_update_post);
router.get('/memory/:id', memoryController.memory_detail);

/// 6. ----------  Motherboard routes  ---------- ///
router.get('/motherboards', motherboardController.motherboard_list);
router.get('/motherboard/create', motherboardController.motherboard_create_get);
router.post(
  '/motherboard/create',
  motherboardController.motherboard_create_post
);
router.get(
  '/motherboard/:id/delete',
  motherboardController.motherboard_delete_get
);
router.post(
  '/motherboard/:id/delete',
  motherboardController.motherboard_delete_post
);
router.get(
  '/motherboard/:id/update',
  motherboardController.motherboard_update_get
);
router.post(
  '/motherboard/:id/update',
  motherboardController.motherboard_update_post
);
router.get('/motherboard/:id', motherboardController.motherboard_detail);

/// 7. ----------  PSU routes  ---------- ///
router.get('/psus', psuController.psu_list);
router.get('/psu/create', psuController.psu_create_get);
router.post('/psu/create', psuController.psu_create_post);
router.get('/psu/:id/delete', psuController.psu_delete_get);
router.post('/psu/:id/delete', psuController.psu_delete_post);
router.get('/psu/:id/update', psuController.psu_update_get);
router.post('/psu/:id/update', psuController.psu_update_post);
router.get('/psu/:id', psuController.psu_detail);

module.exports = router;
