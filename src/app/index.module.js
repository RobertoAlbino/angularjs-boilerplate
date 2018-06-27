(function() {
  'use strict';

  angular
    .module('cotaEasy', [ 
      'ngAnimate', 'ngCookies', 
      'ngTouch', 'ngSanitize', 
      'ngMessages', 'ngAria', 
      'restangular', 'ngRoute', 
      'ui.bootstrap', 'toastr',
      'ui.grid', 'ui.grid.grouping',
      'ui.grid.cellNav', 'ui.grid.edit',
      'ui.grid.resizeColumns', 'ui.grid.pinning',
      'ui.grid.saveState', 'ui.grid.selection',
      'ui.grid.moveColumns', 'ui.grid.exporter',
      'ui.grid.importer', 'ui.grid.pagination',
      'ui.bootstrap.tooltip', 'ui.grid.expandable',
      'ui.select', 'ngSanitize',
      'angular-loading-bar'
    ]);
})();
