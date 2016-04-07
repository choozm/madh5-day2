var CommentService = angular.module("CommentService", []);

var CommentSvc = function ($http, $httpParamSerializerJQLike) {
    this.postComment = function (title, name, comment) {
        $http({
            url: "http://10.10.0.50:10633/topnews/comment",
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: $httpParamSerializerJQLike({
                title: title,
                name: name,
                comment: comment
            })
        })
    };
};

CommentService.service("CommentSvc", ["$http", "$httpParamSerializerJQLike", CommentSvc]);