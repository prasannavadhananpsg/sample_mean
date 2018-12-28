
var myApp = angular.module("myApp", []);


myApp.controller("myCtrl", ['$scope', '$http',function ($scope, $http) {
    console.log("in my controller");
    $scope.newAsset = {};
    $scope.clickedUser = {};
    $scope.assets = [];

    $scope.saveAsset = function () {
        //console.log($scope.newUser);
        $scope.assets.push($scope.newAsset);

        var newAsset = angular.toJson($scope.newAsset);
        // connect mongo
        $http({
            url: 'http://localhost:3000/routes/saveAsset',
            method: 'POST',
            data: newAsset,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            console.log("Asset Created");
        })
        // $scope.newUser={};
    };
  
    var cb = function (error, response) {
        if (!error) {
            $scope.mycoll = response.data;
        }
        else {
            alert("error getting ");
        }
    }

  


