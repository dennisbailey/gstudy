(function(){
  'use strict';

  angular
  .module('gStudy')
  .directive('savedDecks', savedDecks);

function savedDecks() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/saved-decks/saved-decks.html',
    controller: 'SavedDecksCtrl',
    controllerAs: 'vm',
    bindToController: true  
  };
}
})();
