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
module.exports.resetPassword = (data, callback) => {
    userModel.resetPassword(data, (err, data) => {
        if (err) {
            console.log("service error");
            return callback(err);
        } else {
            console.log("In service", data);
            return callback(null, data);
        }
    })
}
module.exports.getAllUser = (req, res) => {
    userService.getAllUser(req, (err, data) => {
        var response = {};
        if (err) {
            return callback(err);
        } else {
            response.success = true;
            response.result = data;
            res.status(200).send(response);
        }
    })
};