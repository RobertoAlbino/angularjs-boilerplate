(function () {
    'use strict';
  
    angular
      .module('cotaEasy')
      .controller('MenuUsuarioController', MenuUsuarioController);
  
    MenuUsuarioController.$inject = [
      '$uibModal',
      '$state',
      'toastr'
    ];
  
    function MenuUsuarioController($uibModal, $state, toastr) {
      var vm = this;
    }
  })();
  