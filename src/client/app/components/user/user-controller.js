angular
  .module('gStudy')
  .controller('UserCtrl', UserCtrl);

UserCtrl.$inject = ['$timeout', '$window', '$rootScope', 'crudService'];

function UserCtrl($timeout, $window, $rootScope, crudService) {
  
  var vm = this;
  
  vm.decks;
  
  vm.getSavedDecks = function (userID) {
        
    crudService.getSavedDecks(userID)
    
    .then( function (result) { vm.decks = result.data; })
    
    .catch( function (error) { console.log(error); })
  
  };
  
  vm.getSavedDecks(1);

}
