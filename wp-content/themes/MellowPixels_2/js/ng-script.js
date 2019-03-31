
var mpixelsApp = angular.module("mpixelsApp", ['matchMedia']);

mpixelsApp.controller("animationController", ["$scope", 'screenSize', function($scope, screenSize) {

	$scope.device_aspect = window.screen.width + " x " + window.screen.height;
	$scope.device_aspect_multy = "Aspect R = " + window.devicePixelRatio + ": "+(window.devicePixelRatio * window.screen.width) + " x " + (window.devicePixelRatio * window.screen.height);

	screenSize.rules = {
	    mobile_sizes: 'only screen and (max-width: 767px)',
	    desktop_sizes: 'only screen and (min-width: 768px)',
	};

	if (screenSize.is('desktop_sizes')) {
		jQuery('.intro-animation-frame').prop("src", '/intro_animation/mpix_introduction_blue1440x400.html');
	}

	if (screenSize.is('mobile_sizes')) {
		jQuery('.intro-animation-frame').prop("src", '/intro_animation/mpix_introduction_blue.html');
	}
}])