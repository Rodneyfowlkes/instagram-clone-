import $ from 'jquery';
import _ from 'lodash';
import angular from 'angular';



function MainController( $scope,$http, SERVER  ){

	$scope.cow =[];
	$scope.post;

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
	      

		$http.get(SERVER.URL).then((res)=>{

	            
			 	console.log(res);
			 	console.log($stateParams.id)
			 	$scope.post = res.data;
                let blu = res.data
			 	if ($scope.post.likes ===undefined ){
            	$scope.post.likes = 0;
                blu.likes = 0 ;
                $('.many_likes').html(`${$scope.post.likes} Likes`)
                console.log('hus');
                // $scope.addLike();
            }   else if($scope.post.likes === 1){
             	$('.many_likes').html(`${post.likes} Like`)
            }   else if($scope.post.likes > 1 ){
            	$('.many_likes').html(`${$scope.post.likes} Likes`)
            }
			
		});
			// $http.delete(SERVER.URL + "5796021ee4f8050003543c6f").then((res)=>{

			// console.log(res);
		// })

	


	}


      
    // $scope.addLike = (post)=>{
    //   if(post._id == post._id ){



    // 	if (post.likes ===undefined ){
    //         	post.likes = 0;
             
             
    //         }  


    //    post.likes += 1;

    //     console.log('hfhfh')
    //      	$http.put(SERVER.URL + post._id,post).then((res)=>{

    //      		console.log(res)            
    //             $http.get(SERVER.URL + post._id).then((res)=>{
    //             console.log(res)
    //             if(res.data.likes === 1){
    //             $('.many_likes').html(`${res.data.likes} Like`)
    //         }   else if(res.data.likes > 1 ){
    //             $('.many_likes').html(`${res.data.likes} Likes`)
    //         }
            
                  
    //         });

    //         });
            
    //  		};


    //  	};


	console.log($scope.cow)


    init();
    function init() {
    $scope.getPost();
    }

   
};


MainController.$inject = ['$scope','$http','SERVER'];

export {MainController};