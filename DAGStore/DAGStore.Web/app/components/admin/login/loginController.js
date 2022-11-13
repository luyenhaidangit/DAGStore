﻿// Register controller
var app = angular.module('DAGStoreLogin');
app.controller('loginController', loginController);

//(function (app) {
//    app.controller('loginController', ['$scope', 'loginService', '$injector', 'notificationService',
//        function ($scope, loginService, $injector, notificationService) {

//            $scope.loginData = {
//                userName: "",
//                password: ""
//            };

//            $scope.loginSubmit = function () {
                //loginService.login($scope.loginData.userName, $scope.loginData.password).then(function (response) {
                //    if (response != null && response.error != undefined) {
                //        notificationService.displayError("Đăng nhập không đúng.");
                //    }
                //    else {
                //        var stateService = $injector.get('$state');
                //        window.location = "/admin"
                //    }
                //});
//            }
//        }]);
//})(angular.module('DAGStoreLogin'));

//// Controller
function loginController($scope, loginService, notificationService) {
    $scope.loginData = {
        userName: "",
        password: ""
    };

    $scope.loginSubmit = loginSubmit;
    function loginSubmit() {
        loginService.login($scope.loginData.userName, $scope.loginData.password).then(function (response) {
            if (response != null && response.error != undefined) {
                notificationService.displayError("Đăng nhập không đúng.");
            }
            else {
                /*window.location = "/admin"*/
            }
        });
    }
}
