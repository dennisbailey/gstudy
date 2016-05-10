angular
  .module('gStudy')
  .controller('StudyCtrl', StudyCtrl);

StudyCtrl.$inject = ['$timeout', '$window', '$rootScope', 'crudService'];

function StudyCtrl($timeout, $window, $rootScope, crudService) {
  
  var vm = this;
  
  vm.decks;
  
  vm.getCards = function (userID) {
        
    crudService.getCards(userID)
    
    .then( function (result) { vm.decks = result.data; })
    
    .catch( function (error) { console.log(error); })
  
  };
  
  vm.getSavedDecks(1);

}
