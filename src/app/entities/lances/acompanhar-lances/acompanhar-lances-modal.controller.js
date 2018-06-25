(function () {
    'use strict';
  
    angular
      .module('cotaEasy')
      .controller('AcompanharLancesModalController', AcompanharLancesModalController);
  
    AcompanharLancesModalController.$inject = [ 
      'Restangular',
      'toastr' 
    ];
  
    function AcompanharLancesModalController(Restangular, toastr) {
      var vm = this;
    }
  })();
  