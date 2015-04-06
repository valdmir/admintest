var companyServices = angular.module('sbAdminApp', ['ngResource']);

companyServices.factory('Companies', ['$resource',
  function($resource){

  return $resource('http://localhost:8080/companies/', {}, {
          query: { method:'GET'}
  });
}]);
