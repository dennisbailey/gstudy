(function(){
  'use strict';

  angular
  .module('gStudy')
  .directive('register', register);

function register() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/register/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'vm',
    bindToController: true  
  };
}
})();
