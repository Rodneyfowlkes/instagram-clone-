import {newForm} from '../temp_literals/html_literals.js';
import $ from 'jquery';



// console.log()

function  AddPhotoController($scope, $http, SERVER, $state) {
	   

        
        $scope.img ={ "likes": 0} 



    	 $scope.getPost = ()=> {

		$http.get(SERVER.URL).then((res)=>{

	
			 	console.log(res);
			
		});
		// 	$http.delete(SERVER.URL + "5794dbdfd1ba7a0003fea76a").then((res)=>{

		// 	console.log(res);
		// })
	}
    $scope.getPost();



     
     $scope.submitPhoto = function () {

        if (forms.$valid){

     	$http.post(SERVER.URL, $scope.img).then((res)=>{

     		console.log(res);
     		$scope.img = undefined;
     		$('.form').html(newForm);
     		$state.go('root.home');

     	});
        } else{
        	console.log('hi');
        }



     };









};


AddPhotoController.$inject = ['$scope','$http', 'SERVER','$state'];
export {AddPhotoController};