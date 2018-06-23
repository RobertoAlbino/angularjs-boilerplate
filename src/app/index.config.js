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
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    // Configurações Restangular
    RestangularProvider.setBaseUrl('http://localhost:8080/api/');
  }
})();
