var NewsFlashApp = angular.module("NewsFlashApp", []);

var NFCtrl = function ($scope, $http, $httpParamSerializerJQLike) {
    $scope.title = "Title 123";
    $scope.name = "";
    $scope.comment = "";
    
    $scope.postComment = function () {
        $http({
            url: "http://10.10.0.50:10633/topnews/comment",
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: $httpParamSerializerJQLike ({
                title: $scope.title,
                name: $scope.name,
                comment: $scope.comment
            })


        })   
    };


}

NewsFlashApp.controller("NFCtrl", ["$scope", "$http", "$httpParamSerializerJQLike", NFCtrl]);
