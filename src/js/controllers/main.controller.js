import $ from 'jquery';
import _ from 'lodash';
import angular from 'angular';



function MainController( $scope,$http, SERVER  ){

	$scope.cow =[];

    $scope.test = _.range(20);
    console.log(_.chunk($scope.test, 2));
	 $scope.getPost = ()=> {

		$http.get(SERVER.URL).then((res)=>{

			let rowRes =  _.chunk(res.data, 4)
			console.log(rowRes)
			 rowRes.forEach(function(y){
			 	console.log(y);
			 	$scope.cow.push(y);
			 
			 })
		});
		// 	$http.delete(SERVER.URL + "5792946dcb68f60003e38734").then((res)=>{

		// 	console.log(res);
		// })
	    


	}

	console.log($scope.cow)


    init();
    function init() {
    $scope.getPost();
    }

   
};


MainController.$inject = ['$scope','$http','SERVER'];

export {MainController};