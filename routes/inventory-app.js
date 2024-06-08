const express = require('express');
const router = express.Router();

// Import controller modules
const case_controller = require('../controllers/caseController');
const cpu_controller = require('../controllers/cpuController');
const fan_controller = require('../controllers/fanController');
const gpu_controller = require('../controllers/gpuController');
const memory_controller = require('../controllers/memoryController');
const motherboard_controller = require('../controllers/motherboardController');
const psu_controller = require('../controllers/psuController');

// GET catalog home page.
router.get('/', (req, res) => {
  res.render('index', { title: 'our pc parts inventory!' });
});
/// 1. ----------  Case routes  ---------- ///
router.get('/case/create', case_controller.case_create_get);
router.post('/case/create', case_controller.case_create_post);
router.get('/case/:id/delete', case_controller.case_delete_get);
router.post('/case/:id/delete', case_controller.case_delete_post);
router.get('/case/:id/update', case_controller.case_update_get);
router.post('/case/:id/update', case_controller.case_update_post);
router.get('/case/:id', case_controller.case_detail);
router.get('/cases', case_controller.case_list);

/// 2. ----------  CPU routes  ---------- ///
router.get('/cpu/create', cpu_controller.cpu_create_get);
router.post('/cpu/create', cpu_controller.cpu_create_post);
router.get('/cpu/:id/delete', cpu_controller.cpu_delete_get);
router.post('/cpu/:id/delete', cpu_controller.cpu_delete_post);
router.get('/cpu/:id/update', cpu_controller.cpu_update_get);
router.post('/cpu/:id/update', cpu_controller.cpu_update_post);
router.get('/cpu/:id', cpu_controller.cpu_detail);
router.get('/cpus', cpu_controller.cpu_list);

/// 3. ----------  Fan routes  ---------- ///
router.get('/fan/create', fan_controller.fan_create_get);
router.post('/fan/create', fan_controller.fan_create_post);
router.get('/fan/:id/delete', fan_controller.fan_delete_get);
router.post('/fan/:id/delete', fan_controller.fan_delete_post);
router.get('/fan/:id/update', fan_controller.fan_update_get);
router.post('/fan/:id/update', fan_controller.fan_update_post);
router.get('/fan/:id', fan_controller.fan_detail);
router.get('/fans', fan_controller.fan_list);

/// 4. ----------  GPU routes  ---------- ///
router.get('/gpu/create', gpu_controller.gpu_create_get);
router.post('/gpu/create', gpu_controller.gpu_create_post);
router.get('/gpu/:id/delete', gpu_controller.gpu_delete_get);
router.post('/gpu/:id/delete', gpu_controller.gpu_delete_post);
router.get('/gpu/:id/update', gpu_controller.gpu_update_get);
router.post('/gpu/:id/update', gpu_controller.gpu_update_post);
router.get('/gpu/:id', gpu_controller.gpu_detail);
router.get('/gpus', gpu_controller.gpu_list);

/// 5. ----------  Memory routes  ---------- ///
router.get('/memory/create', memory_controller.memory_create_get);
router.post('/memory/create', memory_controller.memory_create_post);
router.get('/memory/:id/delete', memory_controller.memory_delete_get);
router.post('/memory/:id/delete', memory_controller.memory_delete_post);
router.get('/memory/:id/update', memory_controller.memory_update_get);
router.post('/memory/:id/update', memory_controller.memory_update_post);
router.get('/memory/:id', memory_controller.memory_detail);
router.get('/memories', memory_controller.memory_list);

/// 6. ----------  Motherboard routes  ---------- ///
router.get(
  '/motherboard/create',
  motherboard_controller.motherboard_create_get
);
router.post(
  '/motherboard/create',
  motherboard_controller.motherboard_create_post
);
router.get(
  '/motherboard/:id/delete',
  motherboard_controller.motherboard_delete_get
);
router.post(
  '/motherboard/:id/delete',
  motherboard_controller.motherboard_delete_post
);
router.get(
  '/motherboard/:id/update',
  motherboard_controller.motherboard_update_get
);
router.post(
  '/motherboard/:id/update',
  motherboard_controller.motherboard_update_post
);
router.get('/motherboard/:id', motherboard_controller.motherboard_detail);
router.get('/motherboards', motherboard_controller.motherboard_list);

/// 7. ----------  PSU routes  ---------- ///
router.get('/psu/create', psu_controller.psu_create_get);
router.post('/psu/create', psu_controller.psu_create_post);
router.get('/psu/:id/delete', psu_controller.psu_delete_get);
router.post('/psu/:id/delete', psu_controller.psu_delete_post);
router.get('/psu/:id/update', psu_controller.psu_update_get);
router.post('/psu/:id/update', psu_controller.psu_update_post);
router.get('/psu/:id', psu_controller.psu_detail);
router.get('/psus', psu_controller.psu_list);

module.exports = router;
