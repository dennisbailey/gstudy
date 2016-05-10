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
      
    .catch( function (error) { console.log('register error', error); 
                               vm.message = error; 
                               vm.show = true });
  
    // Empty the user object
    vm.user = {};
  
  };

}