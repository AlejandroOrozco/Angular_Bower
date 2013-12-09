app.controller('productsCtrl', ['$scope', function ($scope) {
	$scope.title ="Productos"
	$scope.products = [
		{
			name:"Pan",
			price:200
		},{
			name:"Leche",
			price:800
		},{
			name:"Atun",
			price:1200
		}
	]
	$scope.select = function  (p) {
		p.s = !p.s;
	}

	$scope.total = function  () {
		var total = 0;
		angular.forEach($scope.products, function  (p) {
			if (p.s) {total+=p.price};
		});
		return total;
	}
}])