const express = require('express');
const contuser = require('../controller/controller.js');
const router = express.Router();

router.post('/register', contuser.register);
router.post('/login', contuser.login);
router.post('/forgotPassword', contuser.forgotPassword);
module.exports = router;