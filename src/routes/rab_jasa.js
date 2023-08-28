const express = require('express');
const router = express.Router();
const jasaController = require('../controllers/rab_jasa');
const apiKeyMiddleware = require('../middleware/api-key-middleware');

router.get('/jasa',apiKeyMiddleware, jasaController.getJasa);
router.get('/jasa/:id',apiKeyMiddleware, jasaController.getIdJasa)

module.exports = router;