(function() {
  'use strict';

  angular
    .module('cotaEasy')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/entities/login/login.html'
      })
      .when('/menu-usuario', {
        templateUrl: 'app/entities/usuario/menu-usuario/menu-usuario.html'
      })
      .when('/menu-fornecedor', {
        templateUrl: 'app/entities/fornecedor/menu-fornecedor/menu-fornecedor.html'
      })
      .when('/gerenciar-produtos', {
        templateUrl: 'app/entities/produto/gerenciar-produtos/gerenciar-produtos.html'
      })
      .when('/produtos-cotados', {
        templateUrl: 'app/entities/produto/produtos-cotados/produtos-cotados.html'
      })
      .when('/gerenciar-lances', {
        templateUrl: 'app/entities/fornecedor/gerenciar-lances/gerenciar-lances.html'
      })
      .when('/listar-fornecedores', {
        templateUrl: 'app/entities/usuario/listar-fornecedores/listar-fornecedores.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
