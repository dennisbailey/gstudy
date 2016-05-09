angular
  .module('gStudy')
  .config(config);
//   .run(routeChange);

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

  .otherwise({
    redirectTo: '/'
  });

}

// function routeChange($rootScope, $location, $window, authService) {
//   $rootScope.$on('$routeChangeStart', function(event, next, current) {
//     // if route is restricted and no token is present
//     if(next.restricted && !$window.localStorage.getItem('token')) {
//       $location.path('/login');
//     }
//     // if token and prevent logging in is true
//     if(next.preventLoggedIn && $window.localStorage.getItem('token')) {
//       $location.path('/');
//     }
//   });
// }


