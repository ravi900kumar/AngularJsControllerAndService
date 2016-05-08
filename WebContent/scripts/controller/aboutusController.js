app.controller('aboutusController', function($scope, aboutusService ){
	 $scope.aboutusmessage = 'aboutusController  aboutmessage';
	 $scope.aboutmessageservicehello = aboutusService.hello();
	$scope.aboutmessageservicehhi = aboutusService.hi('ravi');
});