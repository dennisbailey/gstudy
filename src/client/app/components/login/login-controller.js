angular
  .module('gStudy')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$rootScope', '$location', 'authService'];

function LoginCtrl($rootScope, $location, authService) {
  var vm = this;

  vm.show = false;
  vm.message;
  
  vm.login = function() {

    authService.login(vm.user)
    
   .then(function(user) { authService.setUserInfo(user);
                          $location.path('/');
                          $rootScope.userID = user.data.data.userID;
                          $rootScope.loggedIn = true;
                        })
                         
    .catch( function (error) { vm.message = error.data.message; 
                               vm.show = true });
                               
    vm.user = {};
  
  };

}
