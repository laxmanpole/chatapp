const express = require('express');
const contuser = require('../controller/controller.js');
const router = express.Router();
const authRoutes = require('./authorization')

router.post('/register', contuser.register);
router.post('/login', contuser.login);
router.use('/auth', authRoutes)
router.post('/forgotPassword', contuser.forgotPassword);
router.post('/resetPassword', contuser.resetPassword)
router.get('/getAllUser', contuser.getAllUser)
module.exports = router;