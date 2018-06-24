(function () {
    'use strict';

    angular
        .module('cotaEasy')
        .controller('GerenciarProdutosController', GerenciarProdutosController);

    GerenciarProdutosController.$inject = [
        'Restangular',
        'toastr'
    ];

    function GerenciarProdutosController(Restangular, toastr) {
        var vm = this;
        vm.usuarioLogado = JSON.parse(window.localStorage.getItem('usuarioLogado'));

        vm.getAllProdutosByUsuario = function () {
            var produtos = Restangular.all("produtos/getAllByUsuarioId");
            produtos.post(vm.usuarioLogado).then(function (retornoLogin) {
                if (retornoLogin.sucesso) {
                    vm.gridOptions.data = retornoLogin.objeto;
                } else {
                    toastr.error(retornoLogin.mensagem);
                }
            }),
            function (error) {
                toastr.error(error);
            };
        }

        vm.gridOptions = {
            data: vm.getAllProdutosByUsuario(),
            enableFiltering: true,
            columnDefs: [{
                name: 'Opções',
                cellTemplate: '<div <button type="button" title="teste" ng-click="grid.appScope.vm.detalhes(row.entity.id)" \ class="btn btn-xs btn-primary">\
                                        <i class="fa fa-list"></i>\
                                    </button>\
                                    \<button type="button" title="teste" ng-click="grid.appScope.vm.chapearMotorista(row.entity.id)" \ ng-class="{ \'btn btn-xs btn-warning\': true }">\
                                        <i class="fa fa-truck"></i>\
                                    </button>\
                               </div>'
            },
            {
                name: 'Código',
                field: 'id'
            },
            {
                name: 'Nome',
                field: 'nome'
            }]
        }
    }
})();
