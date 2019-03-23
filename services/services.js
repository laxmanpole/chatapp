const userModel = require('../model/model')


module.exports.register = (data, callback) => {
    userModel.register(data, (err, data) => {
        if (err) {
            console.log("service error");
            return callback(err);
        } else {
            console.log("In service", data);
            return callback(null, data);
        }
    })
}
module.exports.login = (data, callback) => {
    userModel.login(data, (err, data) => {
        if (err) {
            console.log("service error");
            return callback(err);
        } else {
            console.log("In service", data);
            return callback(null, data);
        }
    })
}
module.exports.forgotPassword = (data, callback) => {
    userModel.forgotPassword(data, (err, data) => {
        if (err) {
            console.log("service error");
            return callback(err);
        } else {
            console.log("In service", data);
            return callback(null, data);
        }
    })
}