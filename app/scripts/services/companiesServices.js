var companyServices = angular.module('sbAdminApp', ['ngResource']);

companyServices.factory('Companies', ['$resource',
  function($resource){

  return $resource('http://127.0.0.1:8080/companies/', {}, {
          query: { method:'GET'}
  });
}]);
