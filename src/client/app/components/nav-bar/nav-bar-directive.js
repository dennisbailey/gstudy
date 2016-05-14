(function(){
  'use strict';

  angular
  .module('gStudy')
  .directive('navBar', navBar);

function navBar() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/nav-bar/nav-bar.html',
    controller: 'NavBarCtrl',
    controllerAs: 'vm',
    bindToController: true
  };
}
})();
