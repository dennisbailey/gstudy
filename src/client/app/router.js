angular
  .module('gStudy')
  .config(config)
  .run(routeChange);

  config.$inject= ['$routeProvider'];

function config($routeProvider) {
  $routeProvider

  .when('/', {
    template: '<landing></landing>',
    restricted: false,
    preventLoggedIn: false
  })
  
  .when('/register', {
    template: '<register></register>',
    restricted: false,
    preventLoggedIn: true
  })
  
  .when('/login', {
    template: '<login></login>',
    restricted: false,
    preventLoggedIn: true
  })
  
  .when('/logout', {
    restricted: false,
    preventLoggedIn: false,
    resolve: {
      goodbye: function(authService, $location) {
                  authService.logout();
                  $location.path('/'); 
               }
            }
  })
  
  .when('/dashboard', {
    template: '<user></user>',
    restricted: false,
    preventLoggedIn: false
  })
  
  .when('/study', {
    template: '<study></study>',
    restricted: false,
    preventLoggedIn: false
  })

  .otherwise({
    redirectTo: '/'
  });

}

function routeChange($rootScope, $location, $window, authService, crudService) {
  $rootScope.$on('$routeChangeStart', function(event, next, current) {

    // Update rootScope if a token is present
    if (typeof($rootScope.loggedIn) === "undefined" && $window.localStorage.getItem('token')) {

      var token = { token: authService.getToken().replace(/(^"|"$)/g, '') };
      
      crudService.getUserInfo(token)
      
      .then( function (result) { $rootScope.loggedIn = true;
                                 $rootScope.userID = result.data.user.id; })
      
      .catch( function (error) { $location.path('/'); });
    
    }
 
    // If route is restricted and no token is present
    if(next.restricted && !$window.localStorage.getItem('token')) {
      $location.path('/login');
    }
    
    // If token is present and prevent logging in is true
    if(next.preventLoggedIn && $window.localStorage.getItem('token')) {
      $location.path('/');
    }
  
  });

}


