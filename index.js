var DeferPromiseApp = angular.module("DeferPromiseApp", []);

var DPCtrl = function ($scope, $q) {
    $scope.order = "";
    $scope.message = "";
    var queue = $q.defer();

    $scope.serveBtn = function () {
        queue.resolve($scope.order);
    }

    $scope.rejectBtn = function () {
        queue.reject($scope.order);
    }

    queue.promise
        .then(function (msg) {
            $scope.message = "Your order " + msg + " is ready.";
        })
        .catch(function (msg) {
            $scope.message = "Sorry, your order " + msg + " is out of stock.";
        })
        .finally(function () {
            $scope.order = "";
        })
}

DeferPromiseApp.controller("DPCtrl", ["$scope", "$q", DPCtrl]);
