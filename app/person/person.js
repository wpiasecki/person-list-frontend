'use strict';

angular.module('myApp.person', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/person', {
    templateUrl: 'person/person.html',
    controller: 'PersonCtrl'
  });
}])

.controller('PersonCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.people = [];
  $http
    .get('http://localhost:3000/person/list')
    .then(response => $scope.people = response.data);
}]);
