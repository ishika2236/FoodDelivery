const express = require('express');
const router = express.Router();
const { handleRegister, handleLogin } = require('../controllers/authentication');

router.post('/register', handleRegister); //register a new user
router.post('/login', handleLogin); //login an existing user

module.exports = router;
