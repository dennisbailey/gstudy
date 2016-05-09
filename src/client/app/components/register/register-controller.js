angular
  .module('gStudy')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['$rootScope', '$location', 'authService'];

function RegisterCtrl($rootScope, $location, authService) {
  var vm = this;

  vm.user = {};
  
  vm.register = function() {

    authService.register(vm.user)
    
    .then( function(user) { authService.setRegisterUserInfo(user);
                            $rootScope.loggedIn = true;
                            $location.path('/'); 
                          })
      
    .catch( function (error) { console.log(error); return error; });
  
  };

}