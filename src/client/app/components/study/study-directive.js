(function(){
  'use strict';

  angular
  .module('gStudy')
  .directive('study', study);

function study() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/study/study.html',
    controller: 'StudyCtrl',
    controllerAs: 'vm',
    bindToController: true  
  };
}
})();
