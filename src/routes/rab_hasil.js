const express = require('express');
const router = express.Router();
const hasilController = require('../controllers/rab_hasil');
const apiKeyMiddleware = require('../middleware/api-key-middleware');


router.get('/hasil-input',apiKeyMiddleware, hasilController.getHasilRole3);
router.get('/hasil-input/:id',apiKeyMiddleware, hasilController.getByIdHasilRole3);
router.post('/hasil-input',apiKeyMiddleware, hasilController.postDataRole3);
router.delete('/hasil-input/:id',apiKeyMiddleware, hasilController.deleteDataRole3);
router.patch('/hasil-input/:id',apiKeyMiddleware, hasilController.updateData);

module.exports = router;