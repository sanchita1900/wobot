const express = require('express');
const router = express.Router();
const User = require("../models/users");
const authController = require('../controller/authController');

router.post('/signup', authController.handleSignup);
router.post('/login', authController.handleLogin);


module.exports = router;