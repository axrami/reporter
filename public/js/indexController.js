var myApp = angular.module('myApp', []);

myApp.controller('indexController', ['$scope', '$http', function($scope, $http) {
    $scope.greeting = 'Hello';

    $scope.results = $http({
        method: 'GET',
        url: '/fileList'
    }).then(function successCallback(response) {
        console.log("RESPONSE FROM ANGULAR SUCCESS CALLBACK: " + response);
        $scope.fileList = JSON.parse(response.data)["ListBucketResult"]["Contents"];
    }, function errorCallback(response) {
        console.log("RESPONSE FROM ANGULAR ERROR CALLBACK: " + response);
        return response;
    });
}]);