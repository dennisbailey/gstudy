(function(){
  'use strict';

  angular
  .module('gStudy')
  .directive('login', login);

function login() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/login/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'vm',
    bindToController: true  
  };
}
})();
