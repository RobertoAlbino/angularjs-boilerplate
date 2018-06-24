(function() {
  'use strict';

  angular
    .module('cotaEasy')
    .config(config);

  config.$inject = [
    'toastrConfig',
    'RestangularProvider'
  ];

  function config(toastrConfig, RestangularProvider) {
    // Configurações toastr 
    toastrConfig.positionClass = 'toast-top-right';
    // Configurações Restangular
    RestangularProvider.setBaseUrl('http://localhost:8080/api/');
    RestangularProvider.setDefaultHeaders({ "Content-Type": 'application/json' });
  }
})();
