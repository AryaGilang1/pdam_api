const express = require('express');
const router = express.Router();
const materialController = require('../controllers/rab_material');
const apiKeyMiddleware = require('../middleware/api-key-middleware');


router.get('/material',apiKeyMiddleware, materialController.getMaterial);
router.get('/material/:id',apiKeyMiddleware, materialController.getIdMaterial);

module.exports = router;