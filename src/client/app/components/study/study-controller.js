angular
  .module('gStudy')
  .controller('StudyCtrl', StudyCtrl);

StudyCtrl.$inject = ['$timeout', '$window', '$rootScope', 'crudService'];

function StudyCtrl($timeout, $window, $rootScope, crudService) {
  
  var vm = this;
  
  vm.cards;
  vm.question = 1;
  vm.totalQuestions;
  vm.progress;
  vm.answerCardShow = false;
  
  vm.counter = 0;
  
  vm.nextCard = function() {
    if (vm.counter < vm.cards.length - 1) { 
      vm.counter += 1;
      vm.question +=1;
      vm.progress = (vm.counter + 1) / vm.totalQuestions;
    }
  };
  
  vm.prevCard = function() {
    if (vm.counter > 0) { 
      vm.counter -= 1;
      vm.question -=1;
      vm.progress = (vm.counter + 1 ) / vm.totalQuestions;
    }
  };
  
  vm.score = function(cardID, score) {
    
    crudService.updateScore($rootScope.userID, cardID, score)
    
    .then( function (result) { console.log(result); })
    
    .catch( function (error) { console.log(error); return error; })
  },
  
  vm.getCards = function (deckID) {

    crudService.getCards(deckID)
    
    .then( function (result) { vm.cards = result.data; 
                               vm.totalQuestions = vm.cards.length;
                               vm.progress = 1/vm.totalQuestions;
    })
    
    .catch( function (error) { console.log(error); return error;})
  
  };
  
  vm.getCards(1);

}
