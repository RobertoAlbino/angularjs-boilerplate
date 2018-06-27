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
    //RestangularProvider.setBaseUrl('http://localhost:8080/api/'); // Desenvolvimento
    RestangularProvider.setBaseUrl('https://cota-easy-api.herokuapp.com/api/'); // Produção
    RestangularProvider.setDefaultHeaders({ "Content-Type": 'application/json' });
  }
})();
