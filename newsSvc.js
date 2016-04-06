var NewsService = angular.module("NewsService", []);

var NewsSvc = function ($rootScope) {
    var source = null;

    this.startStream = function (callback) {
        source = new EventSource("http://10.10.0.50:10633/topnews/api/news");
        source.onmessage = function (evt) {
            $rootScope.$apply(function () {
                callback(JSON.parse(evt.data));
            })
        }
    };

    this.stopStream = function () {
        source.close();
        source = null;
    };
};

NewsService.service("NewsSvc", ["$rootScope", NewsSvc]);