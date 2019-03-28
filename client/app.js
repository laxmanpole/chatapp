var app = angular.module('chatapp', ['ui.router', 'btford.socket-io']);

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'template/login.html',
        controller: 'controlLogin'

    })

    $stateProvider.state('forgotPassword', {
        url: '/forgotPassword',
        templateUrl: 'template/forgotPassword.html',
        controller: 'controlForgotPassword'

    })
    $stateProvider.state('resetPassword', {
            url: '/resetPassword',
            templateUrl: 'template/resetPassword.html',
            controller: 'controlResetPassword'

        })
        .state('register', {
            url: '/register',
            templateUrl: 'template/register.html',
            controller: 'controlRegister'
        })

    .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'template/dashboard.html',
        controller: 'chatController'
    });

    //$urlRouterProvider.otherwise('login');


});


app.service('SocketService', ['socketFactory', function SocketService(socketFactory) {
    return socketFactory({
        ioSocket: io.connect('http://localhost:3000')
    });
}]);