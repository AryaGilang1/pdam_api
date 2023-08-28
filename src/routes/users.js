const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const apiKeyMiddleware = require('../middleware/api-key-middleware');

router.get('/users',apiKeyMiddleware, userController.getUser);
router.post('/users', apiKeyMiddleware, userController.usersLogin);


module.exports = router;
