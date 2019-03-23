const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/config.js');
const mongoose = require("mongoose");
const route = require('../chatapp/routes/routes')



//create express app
const app = express();
var expressValidator = require('express-validator')
app.use(expressValidator());

//parse requests of content-type-application/X-WWW-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

//parse requests of content-type-application/json
app.use(bodyParser.json())
app.use('/', route);
app.use(express.static('./client'));


// Configuring the database

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

//define a simple route
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to ChatApp" });
});

//listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});