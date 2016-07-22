function config($stateProvider, $urlRouterProvider){

	$stateProvider

	 .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.temp.html'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.temp.html',
      controller: 'HomeController'
    })
    .state('root.newPost', {
      url: '/newPost',
      templateUrl: 'templates/newPost.temp.html',
      controller: 'AddPhotoContoller'
    })
    $urlRouterProvider.otherwise('/');

}



 config.$inject = ['$stateProvider', '$urlRouterProvider'];
export {config};