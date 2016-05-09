angular
  .module('gStudy')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['$rootScope', '$location', 'authService'];

function RegisterCtrl($rootScope, $location, authService) {
  var vm = this;

  vm.user = {};
  
  vm.register = function() {

    authService.register(vm.user)
   .then(function(user) { authService.setRegisterUserInfo(user);
                          $location.path('/members');
                          $rootScope.currentUser = authService.getUserInfo(); 
                        })
    .catch( function (error) { console.log(error); return error; })
  
  };

}