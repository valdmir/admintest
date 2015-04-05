describe('Company controllers', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('sbAdminApp'));
  beforeEach(module('companyServices'));


  describe('CompanyListCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://127.0.0.1:8080/companies');

      scope = $rootScope.$new();
      ctrl = $controller('CompanyListCtrl', {$scope: scope});
    }));


  });



});
