
angular
  .module('gStudy')
  .service('crudService', crudService);

crudService.$inject = ['$http', '$window', '$location', '$rootScope'];

function crudService($http, $window, $location, $rootScope) {
    
  return {
  
    getSavedDecks: function(userID) {
      return $http.get('/user/' + userID + '/decks/', user);
    }
  
        
  };
};