function config($stateProvider, $urlRouterProvider){

	$stateProvider

	 .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.temp.html'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.temp.html',
      controller: 'MainController'
    })
    .state('root.newPost', {
      url: '/newPost',
      templateUrl: 'templates/newPost.temp.html',
      controller: 'AddPhotoController'
    })
    .state('root.post', {
      url: '/post/:id',
      templateUrl: 'templates/single_post.temp.html',
      controller: 'singlePost'
    })

    $urlRouterProvider.otherwise('/');

}



 config.$inject = ['$stateProvider', '$urlRouterProvider'];
export {config};