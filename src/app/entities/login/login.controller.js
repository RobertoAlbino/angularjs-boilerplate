(function () {
  'use strict';

  angular
    .module('cotaEasy')
    .controller('LoginController', LoginController);

  LoginController.$inject = [
    '$timeout',
    '$uibModal',
    'toastr'
  ];

  function LoginController($timeout, $uibModal, toastr) {
    var vm = this;

    vm.cadastrarNovoUsuario = function () {
      vm.abrirModalCadastroUsuario();
    }

    vm.abrirModalCadastroUsuario = function () {
      var modalInstance = $uibModal.open({
        ariaLabelledBy: 'Cadastro de usuário',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/entities/novo-usuario/novo-usuario.html',
        controller: 'NovoUsuarioController',
        controllerAs: 'vm',
        size: 'md'
      });
    }
  }
})();
