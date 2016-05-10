(function(){
  'use strict';

  angular
  .module('gStudy')
  .directive('user', user);

function user() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/landing/user.html',
    controller: 'userCtrl',
    controllerAs: 'vm',
    bindToController: true  
  };
}
})();
