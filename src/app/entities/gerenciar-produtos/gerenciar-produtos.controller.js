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

        vm.gridOptions = {
            dataSource: {
                autoBind: true,
                url: "LoteAts/ConsultarGrid"
            },
            columnDefs: [{
                name: 'Ações',
                width: '13%',
                enableColumnMenu: false,
                cellTemplate: '<div  ng-if="!row.groupHeader" ng-class="row.entity.AtingiuTempoLimiteIndicacao ? \'ui-grid-cell-contents text-center yellow\' : \'ui-grid-cell-contents text-center\'" ng-attr-title="{{\'\'}}">\
                                \<button title="Editar" ng-disabled="!row.entity.Ativo" type="button" ui-sref="lote.crud({link: row.entity.IdLote})"\ ng-class="{ \'btn btn-xs btn-info\': true }">\
                                    <i class="fa fa-edit"></i>\
                                </button>\
                                \<button type="button" title="Fila" ng-disabled="!row.entity.Ativo" ng-click="grid.appScope.vm.detalhes(row.entity.IdLote)" \ class="btn btn-xs btn-primary">\
                                    <i class="fa fa-list"></i>\
                                </button>\
                                \<button type="button" title="Adicionar motorista no lote" ng-disabled="!row.entity.Ativo" ng-click="grid.appScope.vm.chapearMotorista(row.entity.IdLote)" \ ng-class="{ \'btn btn-xs btn-warning\': true }">\
                                    <i class="fa fa-truck"></i>\
                                </button>\
                           </div>'
            },
            {
                name: 'Contrato',
                field: 'Contrato',
                width: '10%',
                enableGrouping: false,
                cellTemplate: '<div ng-class="row.entity.AtingiuTempoLimiteIndicacao ? \'ui-grid-cell-contents text-center yellow\' : \'ui-grid-cell-contents text-center\'"><span>{{ row.entity.Contrato }}</span></div>'
            },
            {
                name: 'Cidade origem',
                field: 'EnderecoCarregamento',
                serverField: 'LoteEnderecos.Carregamento.Cidade.Nome',
                ServerFieldCollection: true,
                width: '18%',
                enableGrouping: false,
                cellTemplate: '<div ng-class="row.entity.AtingiuTempoLimiteIndicacao ? \'ui-grid-cell-contents text-center yellow\' : \'ui-grid-cell-contents text-center\'"><span>{{ row.entity.EnderecoCarregamento }}</span></div>'
            },
            {
                name: 'Cidade destino',
                field: 'EnderecoDescarregamento',
                serverField: 'LoteEnderecos.Descarregamento.Cidade.Nome',
                ServerFieldCollection: true,
                width: '18%',
                cellTemplate: '<div ng-class="row.entity.AtingiuTempoLimiteIndicacao ? \'ui-grid-cell-contents text-center yellow\' : \'ui-grid-cell-contents text-center\'"><span>{{ row.entity.EnderecoDescarregamento }}</span></div>'
            },
            {
                name: 'Cliente',
                field: 'Cliente',
                serverField: 'Cliente.RazaoSocial',
                width: '18%',
                enableGrouping: false,
                cellTemplate: '<div ng-class="row.entity.AtingiuTempoLimiteIndicacao ? \'ui-grid-cell-contents text-center yellow\' : \'ui-grid-cell-contents text-center\'"><span>{{ row.entity.Cliente }}</span></div>'
            },
            {
                name: 'Cliente origem',
                field: 'ClienteCarregamento',
                serverField: 'ClienteCarregamento.RazaoSocial',
                width: '18%',
                enableGrouping: false,
                cellTemplate: '<div ng-class="row.entity.AtingiuTempoLimiteIndicacao ? \'ui-grid-cell-contents text-center yellow\' : \'ui-grid-cell-contents text-center\'"><span>{{row.entity.ClienteCarregamento}}</span></div>'
            },
            {
                name: 'Cliente destino',
                field: 'ClienteDescarregamento',
                serverField: 'ClienteDescarregamento.RazaoSocial',
                width: '18%',
                enableGrouping: false,
                cellTemplate: '<div ng-class="row.entity.AtingiuTempoLimiteIndicacao ? \'ui-grid-cell-contents text-center yellow\' : \'ui-grid-cell-contents text-center\'"><span>{{row.entity.ClienteDescarregamento}}</span></div>'
            },
            {
                name: 'Total do lote',
                field: 'QtdTotalToneladas',
                type: 'number',
                width: '10%',
                enableGrouping: false,
                cellTemplate: '<div ng-class="row.entity.AtingiuTempoLimiteIndicacao ? \'ui-grid-cell-contents text-center yellow\' : \'ui-grid-cell-contents text-center\'"><span>{{row.entity.QtdTotalToneladas}}</span></div>'
            },
            {
                name: 'Peso / Cadência/Dia',
                field: 'CadenciaToneladasDia',
                enableFilter: false,
                type: 'number',
                width: '10%',
                enableGrouping: false,
                cellTemplate: '<div ng-class="row.entity.AtingiuTempoLimiteIndicacao ? \'ui-grid-cell-contents text-center yellow\' : \'ui-grid-cell-contents text-center\'"><span>{{row.entity.CadenciaToneladasDia}}</span></div>'
            },
            {
                name: 'Saldo',
                field: 'Saldo',
                type: 'number',
                width: '10%',
                enableGrouping: false,
                enableFiltering: false,
                enableColumnMenu: false,
                enableSorting: false,
                cellTemplate: '<div ng-class="row.entity.AtingiuTempoLimiteIndicacao ? \'ui-grid-cell-contents text-center yellow\' : \'ui-grid-cell-contents text-center\'"><span>{{row.entity.Saldo}}</span></div>'
            },
            {
                name: 'Embarcado',
                field: 'Embarcado',
                type: 'number',
                width: '10%',
                enableGrouping: false,
                enableFiltering: false,
                enableColumnMenu: false,
                enableSorting: false,
                cellTemplate: '<div ng-class="row.entity.AtingiuTempoLimiteIndicacao ? \'ui-grid-cell-contents text-center yellow\' : \'ui-grid-cell-contents text-center\'"><span>{{row.entity.Embarcado}}</span></div>'
            },
            {
                name: 'Prazo',
                field: 'PrazoCliente',
                type: 'date',
                width: '13%',
                cellTemplate: '<div ng-class="row.entity.AtingiuTempoLimiteIndicacao ? \'ui-grid-cell-contents text-center yellow\' : \'ui-grid-cell-contents text-center\'"><span>{{row.entity.PrazoCliente}}</span></div>'
            },
            {
                name: 'Frete Empresa',
                field: 'ValorFreteEmpresa',
                type: 'number',
                width: '15%',
                enableGrouping: false,
                cellTemplate: '<div ng-class="row.entity.AtingiuTempoLimiteIndicacao ? \'ui-grid-cell-contents text-center yellow\' : \'ui-grid-cell-contents text-center\'"><span>{{row.entity.ValorFreteEmpresa}}</span></div>'
            },
            {
                name: 'Frete Pj',
                field: 'ValorFretePj',
                type: 'number',
                width: '15%',
                enableGrouping: false,
                cellTemplate: '<div ng-class="row.entity.AtingiuTempoLimiteIndicacao ? \'ui-grid-cell-contents text-center yellow\' : \'ui-grid-cell-contents text-center\'"><span>{{row.entity.ValorFretePj}}</span></div>'
            },
            {
                name: 'Frete Pf',
                field: 'ValorFretePf',
                type: 'number',
                width: '15%',
                enableGrouping: false,
                cellTemplate: '<div ng-class="row.entity.AtingiuTempoLimiteIndicacao ? \'ui-grid-cell-contents text-center yellow\' : \'ui-grid-cell-contents text-center\'"><span>{{row.entity.ValorFretePf}}</span></div>'
            },
            {
                name: 'Pedágio',
                field: 'Pedagio',
                enum: true,
                width: '10%',
                enumTipo: 'EPedagioLote',
                cellTemplate: '<div ng-class="row.entity.AtingiuTempoLimiteIndicacao ? \'ui-grid-cell-contents text-center yellow\' : \'ui-grid-cell-contents text-center\'"><span>{{row.entity.Pedagio}}</span></div>'
            },
            {
                name: 'Status',
                field: 'Status',
                enum: true,
                width: '13%',
                enumTipo: 'EStatusLote',
                cellTemplate: '<div ng-class="row.entity.AtingiuTempoLimiteIndicacao ? \'ui-grid-cell-contents text-center yellow\' : \'ui-grid-cell-contents text-center\'"><span>{{row.entity.Status}}</span></div>'
            },
            {
                name: 'Data início lote',
                field: 'DataInicioLote',
                type: 'date',
                width: '13%',
                cellTemplate: '<div ng-class="row.entity.AtingiuTempoLimiteIndicacao ? \'ui-grid-cell-contents text-center yellow\' : \'ui-grid-cell-contents text-center\'"><span>{{row.entity.DataInicioLote}}</span></div>'
            },
            {
                name: 'Data de cadastro',
                field: 'DataCadastro',
                type: 'date',
                width: '13%',
                cellTemplate: '<div ng-class="row.entity.AtingiuTempoLimiteIndicacao ? \'ui-grid-cell-contents text-center yellow\' : \'ui-grid-cell-contents text-center\'"><span>{{row.entity.DataCadastro}}</span></div>'
            }]
        }
    }
})();
