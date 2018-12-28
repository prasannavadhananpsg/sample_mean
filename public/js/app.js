var empList = angular.
    module('assetList', []);
var myApp = angular.module("myApp", ["assetList"]);


myApp.controller("myCtrl", ['$scope', '$http', 'assetService', function ($scope, $http, assetService) {
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
    /* $scope.selectUser=function(user){
         console.log(user);
         $scope.clickedUser=user;
         var clickedUser = angular.toJson($scope.clickedUser);
         // connect mongo
         $http({
             url: 'http://localhost:3004/routes/updateAsset',
             method: 'POST',
             data: clickedUser,
             headers: {
                 'Content-Type' : 'application/json'
             }
         }).then(function(response){
             console.log("Asset updated");
         })
     };
     $scope.updateUser=function(){
 
     };
     $scope.deleteUser=function(user){
        // $scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
        $scope.clickedUser=$scope.user;
        var clickedUser = angular.toJson($scope.ClickedUser);
         // connect mongo
         $http({
             url: 'http://localhost:3004/routes/deleteAsset',
             method: 'DELETE',
             data: clickedUser,
             headers: {
                 'Content-Type' : 'application/json'
             }
         }).then(function(response){
             console.log("Assetdeleted");
         })
     };
 */
    var cb = function (error, response) {
        if (!error) {
            $scope.mycoll = response.data;
        }
        else {
            alert("error getting ");
        }
    }

    $scope.getAllAssets = function () {
        assetService.getAllAssets(cb);
    }
}]);
angular.
    module('assetList').service("assetService", abcd);
abcd.$inject = ["$http"];
function abcd($http) {
    this.getAllAssets = function (cb) {
        var promiseObj = $http({
            url: "http://localhost:3004/routes/getAllAssets",
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
        });
        promiseObj.then(function (response) {
            cb(null, response);
        }, function (error) {
            cb(error, null);
        });
    }
}


