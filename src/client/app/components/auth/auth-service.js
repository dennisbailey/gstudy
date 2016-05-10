/**

1. login
2. logout
3. register
4. set user info into localstorage
5. get user info from localstorage

**/
angular
  .module('gStudy')
  .service('authService', authService);

authService.$inject = ['$http', '$window', '$location', '$rootScope'];

function authService($http, $window, $location, $rootScope) {
  
  var user = {};
  
  return {
  
    login: function(user) {
      return $http.post('/auth/login', user);
    },
  
    logout: function(user) {
      user = null;
      $window.localStorage.clear();
      $rootScope.loggedIn = false;
    },
  
    register: function(user) {
      return $http.post('/auth/register', user);
    },
    
    setUserInfo: function(userData) {
      $window.localStorage.setItem('userID', userData.data.data.userID);
      $window.localStorage.setItem('name', userData.data.data.name);
      $window.localStorage.setItem('token', JSON.stringify(userData.data.data.token));
    },
  
    getUserInfo: function(userData) {
      return $window.localStorage.getItem('user');
    },
    
  };
};