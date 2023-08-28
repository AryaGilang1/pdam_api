const express = require('express');
const router = express.Router();

router.use('/', (req, res, next) => {
  const apiKeyFromURL = req.query.apikey; // API key dari URL

  if (!apiKeyFromURL || apiKeyFromURL !== 'pdam_bantulapi') { // Gantikan dengan API key yang sah
    return res.status(401).json({ message: 'Unauthorized' });
  }

  next();
});

module.exports = router;
