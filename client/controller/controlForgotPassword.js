app.controller('controlForgotPassword', function($scope, serviceForgotPassword) {

    $scope.forgotPassword = function() {
        var data = {
            'email': $scope.email,

        }
        serviceForgotPassword.forgotPassword(data, $scope);
    }
});