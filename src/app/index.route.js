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
        templateUrl: 'app/entities/menu-usuario/menu-usuario.html'
      })
      .when('/menu-fornecedor', {
        templateUrl: 'app/entities/menu-fornecedor/menu-fornecedor.html'
      })
      .when('/gerenciar-produtos', {
        templateUrl: 'app/entities/gerenciar-produtos/gerenciar-produtos.html'
      })
      .when('/produtos-cotados', {
        templateUrl: 'app/entities/produtos-cotados/produtos-cotados.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
