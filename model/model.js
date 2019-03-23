const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
let saltRounds = 10;
//const RegisterSchema=mongoose.Schema({
const UserSchema = mongoose.Schema({
    firstname: {
        type: String,
        require: [true, "firstname require"]
    },
    lastname: {
        type: String,
        require: [true, "lastname require"]
    },
    email: {
        type: String,
        require: [true, "email require"]
    },
    password: {
        type: String,
        require: [true, "password require"]
    }
    // title:String,
    // content:String,
}, {
    timestamps: true
});

function userModel() {}
var user = mongoose.model('user', UserSchema);

function hash(password) {
    var hash = bcrypt.hashSync(password, saltRounds);
    return hash;
}
userModel.prototype.register = (body, callback) => {

    user.find({ "email": body.email }, (err, data) => {
        console.log("data.length " + data);
        if (err) {
            console.log("Error in registration");
            return callback(err);
        } else if (data.length > 0) {
            console.log("data.length " + data);

            console.log("Email already exists ");
            return callback("User already Present");

        } else {
            const newUser = new user({
                "firstname": body.firstname,
                "lastname": body.lastname,
                "email": body.email,
                "password": hash(body.password)

            });
            newUser.save((err, result) => {
                if (err) {
                    console.log("Model not found");
                    callback(err);

                } else {
                    console.log("Register Sucessfully");
                    callback(null, result);
                }

            })
        }
    });
}
userModel.prototype.login = (body, callback) => {

    user.find({ "email": body.email }, (err, data) => {
        console.log("data.length " + data);
        if (err) {
            console.log("Error in registration");
            return callback(err);
        } else if (data.length > 0) {
            bcrypt.compare(body.password, data[0].password, (err, res) => {
                if (err) {
                    return callback(err);
                } else if (res) {
                    console.log(data);
                    console.log("congratz....Login successfully!!!!");
                    return callback(null, data);

                } else {
                    console.log("incorrect password pls check it:");
                    return callback("Incorrect password").status(500);
                }
            });
        } else {
            console.log(body.username);
            console.log(body.password);
            console.log("username is not in database please check it.")
            return callback("Invalid User");
        }
    });
}
userModel.prototype.forgotPassword = (body, callback) => {
    user.find({ 'email': body.email }, (err, data) => {
        if (err) {
            return callback(err);
        } else if (data) {
            console.log("data in models==>", data);
            return callback(null, user);
        } else {
            return callback('Invalid user !!!');
        }
    });
}

module.exports = new userModel();