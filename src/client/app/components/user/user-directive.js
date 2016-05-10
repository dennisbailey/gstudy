(function(){
  'use strict';

  angular
  .module('gStudy')
  .directive('user', user);

function user() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/user/user.html',
    controller: 'UserCtrl',
    controllerAs: 'vm',
    bindToController: true  
  };
}
})();
