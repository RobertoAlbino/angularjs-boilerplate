(function() {
  'use strict';

  angular
    .module('cotaEasy')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/entities/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })      
      .otherwise({
        redirectTo: '/'
      });
  }

})();
