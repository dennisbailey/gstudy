angular
  .module('gStudy')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$rootScope', '$location', 'authService'];

function LoginCtrl($rootScope, $location, authService) {
  var vm = this;

  vm.user = {};
  
  vm.login = function() {

    authService.login(vm.user)
    
   .then(function(user) { console.log('success!'); authService.setUserInfo(user);
                          $location.path('/');
                          $rootScope.currentUser = JSON.parse(authService.getUserInfo()); 
                          $rootScope.loggedIn = true;
                        })
                         
    .catch( function (error) { console.log(error.data.message); return error; })
  
  };

}
