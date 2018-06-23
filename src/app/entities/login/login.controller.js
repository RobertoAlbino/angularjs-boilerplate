(function () {
  'use strict';

  angular
    .module('cotaEasy')
    .controller('LoginController', LoginController);

  LoginController.$inject = [
    '$uibModal'
  ];

  function LoginController($uibModal) {
    var vm = this;

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
