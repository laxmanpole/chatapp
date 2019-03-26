const userService = require('../services/services')
const jwt = require('jsonwebtoken')
const sendmail = require('../middleware/sendmail')
const gentoken = require('../middleware/token')
module.exports.register = (req, res) => {
    req.checkBody('firstname', 'firstname is not valid').isLength({ min: 3 }).isAlpha();
    req.checkBody('lastname', 'lastname is not valid').isLength({ min: 3 }).isAlpha();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('password', 'password is not valid').isLength({ min: 4 }).equals(req.body.password);
    var errors = req.validationErrors();
    var response = {};
    if (errors) {
        response.success = false;

        response.error = errors;

        return res.status(422).send(response);

    } else {
        userService.register(req.body, (err, data) => {
            if (err) {

                return res.status(500).send({
                    message: err
                })
            } else {
                return res.status(200).send({ message: data });
            }
        });
    }
};
module.exports.login = (req, res) => {
    req.checkBody('email', 'email is not valid').isEmail();
    req.checkBody('password', 'password is not valid').isLength({ min: 4 });
    var secret = "adcgft";
    var errors = req.validationErrors();
    var response = {};
    if (errors) {
        response.success = false;
        response.error = errors;
        return releaseEvents.status(422).send(response);
    } else {
        userService.login(req.body, (err, data) => {
            if (err) {
                return res.status(500).send({
                    message: err
                });
            } else {
                var token = jwt.sign({ email: req.email, id: data[0]._id },
                    secret, { expiresIn: 86400000 });
                return res.status(200).send({
                    message: data,
                    "token": token
                });
            }
        });
    }
};
module.exports.forgotPassword = (req, res) => {
    userService.forgotPassword(req.body, (err, data) => {
        var response = {};
        if (err) {
            return res.status(500).send({
                message: err
            });
        } else {
            response.success = true;
            response.result = data;

            //console.log('data in controller==>', data[0]._id);

            const payload = {
                user_id: data._id
            }
            const obj = gentoken.GenerateToken(payload);
            const url = 'http://localhost:3000/resetPassword/' + obj.token;
            console.log("url in controller", url);
            sendmail.sendEMailFunction(url);
            res.status(200).send(url);
        }
    });

};
module.exports.resetPassword = (req, res) => {
    req.checkBody('password', 'password is not valid').isLength({ min: 4 });
    var errors = req.validationErrors();
    var response = {};
    if (errors) {
        response.success = false;
        response.error = errors;
        return res.status(422).send(response);
    } else {
        userService.resetPassword(req.body, (err, data) => {
            if (err) {
                console.log(err);
                return res.status(500).send({
                    message: err
                })
            } else {
                return res.status(200).send({
                    message: data
                });
            }

        });
    }
}