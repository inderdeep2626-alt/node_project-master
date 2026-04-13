const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authControllers.js');

router.get('/generate-token', authControllers.generateToken);
router.get('/verify-token', authControllers.verifyToken);





module.exports = router;