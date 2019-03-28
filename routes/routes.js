const express = require('express');
const contuser = require('../controller/controller.js');
const router = express.Router();
const authRoute = require('./authorization')

router.post('/register', contuser.register);
router.post('/login', contuser.login);
router.get('/auth', authRoute)
router.post('/forgotPassword', contuser.forgotPassword);
router.post('/resetPassword', contuser.resetPassword)
router.get('/getAllUser', contuser.getAllUser)
module.exports = router;