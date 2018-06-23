(function () {
  'use strict';

  angular
    .module('cotaEasy')
    .controller('NovoUsuarioController', NovoUsuarioController);

  NovoUsuarioController.$inject = [ 
    'Restangular' 
  ];

  function NovoUsuarioController(Restangular) {
    var vm = this;
    vm.usuario = {
      nome: "",
      email: "",
      telefone: "",
      senha: "",
      segundaSenha: "",
      perfil: 0
    }

    vm.cadastrarNovoUsuario = function() {
      var teste = Restangular.all('usuarios').getList();
      console.log(teste);
    }
  }
})();
