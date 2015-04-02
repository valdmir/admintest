var companyServices = angular.module('companyServices', ['ngResource']);

companyServices.factory('Companies', ['$resource',
  function($resource){
    return $resource('127.0.0.1:8080/companies/');
  }]);
