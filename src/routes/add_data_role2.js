const express = require('express');
const router = express.Router();
const addDataController = require('../controllers/add_data_role2');
const apiKeyMiddleware = require('../middleware/api-key-middleware');

router.get('/simpan-data', apiKeyMiddleware, addDataController.getAllRoleDua);
router.get('/simpan-data/:id',apiKeyMiddleware,  addDataController.getByIdRoleDua)
router.post('/simpan-data', apiKeyMiddleware, addDataController.postData);
router.patch('/simpan-data/:id',apiKeyMiddleware,  addDataController.updateData);
router.delete('/simpan-data/:id',apiKeyMiddleware, addDataController.deleteData);

module.exports = router;