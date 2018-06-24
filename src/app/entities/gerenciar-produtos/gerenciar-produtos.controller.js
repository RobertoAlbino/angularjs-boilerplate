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
            enableColumnMenus: false,
            columnDefs: [{                
                name: 'Opções',
                enableFiltering: false,
                cellTemplate: '<div ng-class="\'ui-grid-cell-contents text-center\'">\
                                    \<button type="button" ng-class="\'btn btn-xs btn-primary\'">\
                                        Novo produto\
                                    </button>\
                                    \<button type="button" ng-class="\'btn btn-xs btn-success\'">\
                                        Abrir cotação\
                                    </button>\
                                    \<button type="button" ng-class="\'btn btn-xs btn-warning\'">\
                                        Editar\
                                    </button>\
                                    \<button type="button" ng-click="grid.appScope.vm.detalhes(row.entity.id)" \ ng-class="\'btn btn-xs btn-danger\'">\
                                        Remover \
                                    </button>\
                                </div>'
            },
            {
                name: 'Código',
                field: 'id',
                type: 'number'
            },
            {
                name: 'Nome',
                field: 'nome',
                type: 'text'
            }]
        }
    }
})();
