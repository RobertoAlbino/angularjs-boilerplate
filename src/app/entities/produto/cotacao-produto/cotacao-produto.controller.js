(function () {
    'use strict';
  
    angular
      .module('cotaEasy')
      .controller('CotacaoProdutoController', CotacaoProdutoController);
  
    CotacaoProdutoController.$inject = [
      '$uibModal',
      '$uibModalInstance',
      'Restangular',
      'toastr',
      'produto'
    ];
  
    function CotacaoProdutoController($uibModal, $uibModalInstance, Restangular, toastr, produto) {
      var vm = this;
      vm.usuarioLogado = JSON.parse(window.localStorage.getItem('usuarioLogado'));
      vm.cotacao = {
        dataInicial: new Date(),
        dataFinal: new Date(),
        quantidade: 1,
        produto: produto,
        usuario: produto.usuario,
        fornecedores: []
      }
      vm.listaFornecedores = [];

      vm.buscarTodosFornecedores = function() {
        var fornecedores = Restangular.all("usuarios/getAllFornecedores");
        fornecedores.post().then(function(response) {
          if (response.sucesso) {
            console.log(response.objeto);
            vm.listaFornecedores = response.objeto;
          } else {
            toastr.error(response.mensagem);
          }
        });
      }

      vm.iniciarCotacao = function() {
        var produto = Restangular.all("produtos/cadastrarProduto");
        produto.post(vm.produto).then(function(response) {
          if (response.sucesso) {
            toastr.success(vm.isEdicao ? "Produto atualizado com sucesso." : "Produto cadastrado com suceso.");
            $uibModalInstance.close(true);
          } else {
            toastr.error(response.mensagem);
          }
        });
      }

      vm.buscarTodosFornecedores();
    }
  })();
  