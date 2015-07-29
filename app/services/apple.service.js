angular.module('appleValidation')
  .factory('Email', ['$http', function($http){
    var service = {
      getResponse: getResponse  
    }

    return service;

    function getResponse(){
      return $http.get('apple/response.json');
    }
  
  }])
  .factory('Password', function(){
    const emptyPassword = {
      oneLowercase: null,
      oneCapitalLetter: null,
      oneNumber: null,
      notConsecutive: null,
      notAccountName: null,
      atleastEight: null,
      notCommon: null
    }

    var password = {
      oneLowercase: null,
      oneCapitalLetter: null,
      oneNumber: null,
      notConsecutive: null,
      notAccountName: null,
      atleastEight: null,
      notCommon: null
    }
    var service = {
      validate: validate 
    } 

    return service;

    function validate(pass, email){
      if (pass == ''){
        return emptyPassword;
      }
      else{
        password.notAccountName   = pass != email;
        password.atleastEight     = pass.length >= 8;

        password.oneLowercase     = oneLowercase(pass);
        password.oneCapitalLetter = oneCapitalLetter(pass);
        password.oneNumber        = oneNumber(pass);
        password.notConsecutive   = notConsecutive(pass);
        password.notCommon        = notCommon(pass);

        return password;
      }
    }

    function oneLowercase(pass){
      var re = /[a-z]+/;
      return re.test(pass);
    }

    function oneCapitalLetter(pass){
      var re = /[A-Z]+/;
      return re.test(pass);
    }

    function oneNumber(pass){
      var re = /[0-9]+/;
      return re.test(pass);
    }

    function notConsecutive(pass){
      var re = /^((.)\2?(?!\2))+$/;
      return re.test(pass);
    }

    function notCommon(pass){
      if ((password.notAccountName) &&
         (password.atleastEight) &&
         (password.oneLowercase) &&
         (password.oneCapitalLetter) &&
         (password.oneNumber) &&
         (password.notConsecutive)){
            return true; 
         }
      else{
        return null;
      }
    }
  })
