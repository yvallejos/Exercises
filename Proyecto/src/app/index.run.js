(function() {
  'use strict';

  angular
    .module('proyecto')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
