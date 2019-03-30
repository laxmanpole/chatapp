app.controller('controlResetPassword', function ($scope, serviceResetPassword) {

    // for registration form
    $scope.resetPassword = function () {
        var user = {
            'password': $scope.password
        }

        console.log("register calling", user);
        if ($scope.password != $scope.password) {
            $scope.message = "password not match ";
        } else {
            serviceResetPassword.registerUser(user, $scope);
        }
    }
});
