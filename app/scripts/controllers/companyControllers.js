'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */

 var sbAdminApp = angular.module('sbAdminApp',[]);


// sbAdminApp.controller('CompanyListCtrl',function($scope){
//     $scope.companies=[
//       {'id':'1'
//       ,'name':'testing1'
//       ,'email':'testing@gmail.com'
//       ,'total_employee':'15'
//       ,'use_expired_date':'05-05-2015'
//       },
//       {'id':'1'
//       ,'name':'testing1'
//       ,'email':'testing@gmail.com'
//       ,'total_employee':'15'
//       ,'use_expired_date':'05-05-2015'
//       },
//       {'id':'1'
//       ,'name':'testing1'
//       ,'email':'testing@gmail.com'
//       ,'total_employee':'15'
//       ,'use_expired_date':'05-05-2015'
//       }
//     ];
//
//
//   });
sbAdminApp.controller('CompanyListCtrl',function($scope,Companies){

    $scope.companies=Companies.query();
}]);
