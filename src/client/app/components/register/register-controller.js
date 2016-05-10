angular
  .module('gStudy')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['$rootScope', '$location', 'authService'];

function RegisterCtrl($rootScope, $location, authService) {
  var vm = this;
  
  vm.show = false;
  vm.message;
  
  vm.register = function() {

    authService.register(vm.user)
    
    .then( function(result) { authService.setUserInfo(result);
                              $rootScope.loggedIn = true;
                              $location.path('/'); 
                          })
      
    .catch( function (error) { vm.message = error.data.message; 
                               vm.show = true });
  
    // Empty the user object
    vm.user = {};
  
  };

}