# Get Started

MIT License

**(1)** Include angular.min.js to your html

**(2)** Include dist/angular-baidu-map.min.js to your html

**(3)** Add `'angular-baidu-map'` to your main module's list of dependencies.

**(4)** html markup

```html
<!doctype html>
<html ng-app="demo">
<head>

</head>
<body>

    ...
    <script src="angular.min.js"></script>
    <script src="dist/angular-baidu-map.min.js"></script>
    ...
    
    <script>
        var app = angular.module("demo", ['angular-baidu-map']);
        
        app.controller('test', ['$scope', function ($scope) {
        
            $scope.mapReady = function (map) {
                map.enableScrollWheelZoom();
                map.addControl(new BMap.NavigationControl());
                map.addControl(new BMap.ScaleControl());
                map.addControl(new BMap.OverviewMapControl());
                map.addControl(new BMap.MapTypeControl());
        
                var point = new BMap.Point(116.404, 39.915);
                map.centerAndZoom(point, 15);
                var marker = new BMap.Marker(point);
                map.addOverlay(marker);
            };
        }]);
    </script>
    ...
    
    <div baidu-map="your baidu ak" map-ready="mapReady(map)" style="height: 300px">

    </div>
</body>
</html>
```
