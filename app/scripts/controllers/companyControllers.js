'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */

 var sbAdminApp = angular.module('sbAdminApp',[])
 .service('companyServices',function(){
   console.log("testing");
 });

// sbAdminApp.controller('CompanyListCtrl',function($scope){
//     $scope.companies=[
    //   {'id':'1'
    //   ,'name':'testing1'
    //   ,'email':'testing@gmail.com'
    //   ,'total_employee':'15'
    //   ,'use_expired_date':'05-05-2015'
    //   },
    //   {'id':'1'
    //   ,'name':'testing1'
    //   ,'email':'testing@gmail.com'
    //   ,'total_employee':'15'
    //   ,'use_expired_date':'05-05-2015'
    //   },
    //   {'id':'1'
    //   ,'name':'testing1'
    //   ,'email':'testing@gmail.com'
    //   ,'total_employee':'15'
    //   ,'use_expired_date':'05-05-2015'
    //   }
    // ];
//
//
//   });
sbAdminApp.controller('CompanyListCtrl',['$scope','Companies',function($scope,Companies){

    $scope.companies=Companies.query();
}]);

// sbAdminApp.controller('CompanyListCtrl',['$scope','$http',function($scope,$http){
//
//   $http.get('http://127.0.0.1:8080/companies/').success(function(data) {
//     $scope.companies = data;
//
//   });
// }]);
