'use strict';

angular.module('appleValidation')
  .controller('AppleCtrl', AppleCtrl)

AppleCtrl.$inject = ['$log', '$scope'];

function AppleCtrl($log, $scope){
  $log.debug('*********AppleCtrl*********');
}
