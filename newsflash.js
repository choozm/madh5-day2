var NewsFlashApp = angular.module("NewsFlashApp", ["NewsService", "CommentService"]);

var NFCtrl = function ($scope, $http, $httpParamSerializerJQLike, NewsSvc, CommentSvc) {
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
        CommentSvc.postComment($scope.newsItem.title, $scope.name, $scope.comment);
    };
};

NewsFlashApp.controller("NFCtrl", ["$scope", "$http", "$httpParamSerializerJQLike", "NewsSvc", "CommentSvc", NFCtrl]);
