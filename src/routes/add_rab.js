const express = require('express');
const router = express.Router();
const addRabController = require('../controllers/add_rab');
const apiKeyMiddleware = require('../middleware/api-key-middleware');


router.get('/rab-list',apiKeyMiddleware,  addRabController.getAllRab);
router.get('/rab-list/:id',apiKeyMiddleware, addRabController.getRabById);
router.post('/rab-list',apiKeyMiddleware, addRabController.postRab);
router.delete('/rab-list/:id',apiKeyMiddleware, addRabController.deleteRab);
router.put('/rab-list/:id',apiKeyMiddleware, addRabController.updateData);

module.exports = router;