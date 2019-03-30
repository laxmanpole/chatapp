var userModel = require('../model/model');
//Register purpose
exports.register = (req, callback) => {
        userModel.register(req, (err, data) => {
            if (err) {
                return callback(err);
            } else {
                return callback(null, data);
            }
        })
    }
    //Login purpose
exports.login = (req, callback) => {
        userModel.login(req, (err, data) => {
            if (err) {
                return callback(err);
            } else {
                return callback(null, data);
            }
        })
    }
    //forgot password
exports.forgotPassword = (req, callback) => {
        userModel.forgotPassword(req, (err, data) => {
            if (err) {
                return callback(err);
            } else {
                return callback(null, data);
            }
        })
    }
    //reset password
exports.resetPassword = (req, callback) => {
        userModel.resetPassword(req, (err, data) => {
            if (err) {
                return callback(err);
            } else {
                return callback(null, data);
            }
        })
    }
    //retrive
exports.getAllUser = (req, callback) => {
    userModel.getAllUser(req, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, data);
        }
    })
}