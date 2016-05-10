angular
  .module('gStudy')
  .controller('navBarCtrl', navBarCtrl);

navBarCtrl.$inject = ['$rootScope', '$location', 'authService', 'crudService'];

function navBarCtrl($rootScope, $location, authService, crudService) {
  
  var vm = this;
  
  $rootScope.loggedIn = false;
  
  vm.updateRootScope = function() {
    
    if (typeof($rootScope.loggedIn) === "undefined" && authService.getToken().length > 0) { 
      
      var tokenObj = { token: authService.getToken().replace(/(^"|"$)/g, '') };
      
      crudService.getUserInfo(tokenObj)
      
      .then( function (result) { $rootScope.loggedIn = true; })
      
      .catch( function (error) { $location.path('/'); });
    
    }
                               
  };
  
  vm.updateRootScope();

}
