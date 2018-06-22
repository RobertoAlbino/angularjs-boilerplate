(function() {
  'use strict';

  angular
    .module('cotaEasy')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
