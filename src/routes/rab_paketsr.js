const express = require('express');
const router = express.Router();
const srController = require('../controllers/rab_paketsr');
const apiKeyMiddleware = require('../middleware/api-key-middleware');

router.get('/paket-sr',apiKeyMiddleware, srController.getSR);
router.get('/paket-sr/:id',apiKeyMiddleware, srController.getIdSr);


module.exports = router;
