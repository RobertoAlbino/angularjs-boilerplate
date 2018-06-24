(function () {
    'use strict';
  
    angular
      .module('cotaEasy')
      .controller('NovoProdutoController', NovoProdutoController);
  
    NovoProdutoController.$inject = [
      '$uibModal',
      '$location',
      'Restangular',
      'toastr',
      'isEdicao',
      'entidadeProduto'
    ];
  
    function NovoProdutoController($uibModal, $location, Restangular, toastr, isEdicao, entidadeProduto) {
      var vm = this;
      vm.operacao = !isEdicao ? "Cadastrar" : "Editar";
      vm.isEdicao = isEdicao;
      vm.produto = entidadeProduto;

      vm.logar = function() {
        if (!vm.loginValido()) {
          toastr.error("Nem todas as informações de login estão corretas.");
          return;
        }
        var logar = Restangular.all("login/logar");
        logar.post(vm.login).then(function(retornoLogin) {
          if (retornoLogin.sucesso) {
            vm.armazenarLocalmenteUsuarioLogado(retornoLogin);
            retornoLogin.objeto.perfil === "USUARIO" ? $location.path('menu-usuario') : $location.path('menu-fornecedor');
          } else {
            toastr.error(retornoLogin.mensagem);
          }
        });
      }
    }
  })();
  