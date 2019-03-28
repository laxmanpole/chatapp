var express = require('express');

var router = express.Router();
var users = require('../controller/controller');
var chatctrl = require("../controller/chatController");
var auth = require('../authantication/index');

try {
    router.get('/getAllUser', auth, users.getAllUser);
    router.get('/getUserMsg', auth, chatctrl.getUserMsg);

} catch (err) {
    console.log("err found while receving token - authorization.js");
}

module.exports = router;