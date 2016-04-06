var NewsFlashApp = angular.module("NewsFlashApp", ["NewsService"]);

var NFCtrl = function ($scope, $http, $httpParamSerializerJQLike, NewsSvc) {
    $scope.title = "";
    $scope.name = "ZM";
    $scope.comment = "Wow";
    $scope.newsItem = {};

    $scope.startNews = function () {
        $scope.newsItem.thumbnail = "";
        NewsSvc.startStream(function (news) {
            $scope.newsItem = news;
        });
    };

    $scope.stopNews = function () {
        $scope.newsItem.thumbnail = "";
        $scope.newsItem = {};
        NewsSvc.stopStream();
    };

    $scope.postComment = function () {
        $http({
            url: "http://10.10.0.50:10633/topnews/comment",
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: $httpParamSerializerJQLike({
                title: $scope.newsItem.title,
                name: $scope.name,
                comment: $scope.comment
            })
        })
    };
};

NewsFlashApp.controller("NFCtrl", ["$scope", "$http", "$httpParamSerializerJQLike", "NewsSvc", NFCtrl]);
