const express = require('express');
const router = express.Router();
const aksesorisController = require('../controllers/rab_aksesoris');
const apiKeyMiddleware = require('../middleware/api-key-middleware');


router.get('/aksesoris',apiKeyMiddleware, aksesorisController.getAksesoris);
router.get('/aksesoris/:id',apiKeyMiddleware, aksesorisController.getAksesorisById);

module.exports = router;