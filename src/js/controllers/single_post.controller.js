import $ from 'jquery';



function singlePost ($scope, $stateParams, $http, SERVER){

    
    
     $scope.post;

    $scope.getPost = ()=> {

		$http.get(SERVER.URL + $stateParams.id).then((res)=>{

	            
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
    
    $scope.getPost();
  
    $scope.addLike = (post)=>{

       let ncount = post.likes + 1;
       $scope.post.likes += 1;

        console.log('hfhfh')
         	$http.put(SERVER.URL + $stateParams.id,post).then((res)=>{

         		console.log(res)            
                $http.get(SERVER.URL + $stateParams.id).then((res)=>{
                console.log(res)
                if(res.data.likes === 1){
                $('.many_likes').html(`${res.data.likes} Like`)
            }   else if(res.data.likes > 1 ){
                $('.many_likes').html(`${res.data.likes} Likes`)
            }
            
                  
            });

            });
            
     		


     	};

}




singlePost.$inject = ['$scope', '$stateParams', '$http', 'SERVER'];
export { singlePost };