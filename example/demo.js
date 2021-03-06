'use strict';

var app = angular.module('demo', ['cropular']);

app.controller('DemoCtrl', function($scope, $http, $timeout, $interval) {
    
    var ctrl = this;
    ctrl.url = "https://images.unsplash.com/photo-1430329429612-babb42f88673?crop=entropy&dpr=2&fit=crop&fm=jpg&h=725&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1300";
    ctrl.cropObject = {};
    ctrl.cropEnabled = false;
    
    ctrl.doRotate = function(rotateParams) {
        ctrl.rotateValue = rotateParams;
    }
    
    ctrl.toggleCrop = function() {
        ctrl.cropEnabled = !ctrl.cropEnabled;
    };
    
    ctrl.saveCrop = function() {
        ctrl.cropEnabled = !ctrl.cropEnabled;
        alert(JSON.stringify(ctrl.cropObject));
    };
});
