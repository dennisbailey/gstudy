
angular
  .module('gStudy')
  .service('crudService', crudService);

crudService.$inject = ['$http', '$window', '$location', '$rootScope'];

function crudService($http, $window, $location, $rootScope) {
    
  return {
    
    getUserInfo: function(token) {
      return $http.post('/auth/token', token);
        
    },

  
    getSavedDecks: function(userID) {
      return $http.get('/user/' + userID );
    },
    
    
    getCards: function(deckID) {
      return $http.get('/user/deck/' + deckID);
    },
    

    updateScore: function(userID, cardID, score) {
      return $http.post('/user/' + userID + '/card/' + cardID + '/score/' + score'');
    }
  
        
  };
};