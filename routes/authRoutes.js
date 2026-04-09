const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authControllers.js');

router.get('/generate-token', authControllers.generateToken);





module.exports = router;