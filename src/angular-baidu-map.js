(function () {
    'use strict';

    var app = angular.module('angular-baidu-map', []);

    app.directive('baiduMap', ['$window', function ($window) {
        return {
            restrict: 'A',
            link: function () {
                $window.baiduMapLoaded = function () {
                    console.log('done');
                };
                var script = document.createElement("script");
                script.src = "http://api.map.baidu.com/api?v=2.0&ak=G2zm7GgGGesyLUEoUfVF2jheDGRrkecU&callback=baiduMapLoaded";
                document.body.appendChild(script);
            }
        };
    }]);
})();