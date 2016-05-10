(function(){
  'use strict';

  angular
  .module('gStudy')
  .directive('study', study);

function user() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/study/study.html',
    controller: 'StudyCtrl',
    controllerAs: 'vm',
    bindToController: true  
  };
}
})();
