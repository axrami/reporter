var myApp = angular.module('myApp', []);

myApp.controller('indexController', ['$scope', '$http', function($scope, $http) {
    $scope.greeting = 'Hellow';

    $scope.results = $http({
        method: 'GET',
        url: '/fileList'
    }).then(function successCallback(response) {
        console.log("RESPONSE FROM ANGULAR SUCCESS CALLBACK: " + response);
    }, function errorCallback(response) {
        console.log("RESPONSE FROM ANGULAR ERROR CALLBACK: " + response);
    });
}]);