'use strict';

angular.module('appleValidation')
  .controller('AppleCtrl', AppleCtrl)

AppleCtrl.$inject = ['$log', '$scope', '$http', 'Email', 'Password'];

function AppleCtrl($log, $scope, $http, Email, Password){
  $log.debug('*********AppleCtrl*********');

  $scope.email = {
    validEmail: null,
    valid: null,
    notOwned: null
  }

  $scope.password = {
    oneLowercase: null,
    oneCapitalLetter: null,
    oneNumber: null,
    notConsecutive: null,
    notAccountName: null,
    atleastEight: null,
    notCommon: null
  }

  $scope.iconClass             = iconClass;
  $scope.textClass             = textClass;
  $scope.updateEmailPopover    = updateEmailPopover;
  $scope.updatePasswordPopover = updatePasswordPopover;

  function updateEmailPopover(email){
    validateEmail(email, function(){
      Email.getResponse(email).success(function(data){
        $scope.email.valid    = data.valid;
        $scope.email.notOwned = !data.appleOwnedDomain;
      });
    });
  }

  function validateEmail(email, callback) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    if (email == ''){
      $scope.email.validEmail = null;
    }
    else{
      $scope.email.validEmail = re.test(email);
      if (re.test(email)){
        callback(email)
      }
      else{
        $scope.email.valid = null;
        $scope.email.notOwned = null;
      }
    }
  }

  function updatePasswordPopover(password, email){
    $scope.password = Password.validate(password, email);
  }

  function iconClass(value){
    if (value === null)
      return "glyphicon glyphicon-unchecked";
    else if (value)
      return "glyphicon glyphicon-ok-sign text-success";
    else
      return "glyphicon glyphicon-exclamation-sign text-danger";
  }

  function textClass(value){
    if (value == false)
      return "text-danger";
  }
}
