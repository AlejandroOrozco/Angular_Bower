app.controller('todoCtrl', ['$scope', function ($scope) {
	$scope.activities = [
		{
			name:"Create a todo with angular js",
			state:true
		}
	]
	$scope.do = function  (a) {
		a.state = !a.state;
	}
	$scope.total = function  () {
		var total = 0;	
		angular.forEach($scope.activities, function  (a) {
			if (a.state) {total+=1};
		});
		return ((total/$scope.activities.length)*100);
	}
	$scope.add = function  () {
		if ($scope.activitie) {	
			$scope.activities.push({name:$scope.activitie});
		}else{
			alert("Hey write something then click add");
		}	
	}
	$scope.remove = function  (index) {
		$scope.activities.splice(index, 1);
	}

}])