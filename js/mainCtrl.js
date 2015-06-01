var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope){
	$scope.friends = ['Dave', 'Ashley', 'Kimberly', 'Charles', 'Lily', 'Penelope'];

	$scope.addFriend = function(){
			$scope.friends.push($scope.newFriend);
			$scope.newFriend = '';
		};

});