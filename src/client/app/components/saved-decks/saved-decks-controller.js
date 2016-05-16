angular
  .module('gStudy')
  .controller('SavedDecksCtrl', SavedDecksCtrl);

SavedDecksCtrl.$inject = ['$timeout', '$window', '$rootScope', 'crudService'];

function SavedDecksCtrl($timeout, $window, $rootScope, crudService) {
  
  var vm = this;
  
  vm.decks;
  vm.deckID;
  
  vm.getSavedDecks = function (userID) {
        
    crudService.getSavedDecks(userID)
    
    .then( function (result) { vm.decks = result.data; })
    
    .catch( function (error) { console.log(error); })
  
  };
  
  vm.getSavedDecks($rootScope.userID);

}
