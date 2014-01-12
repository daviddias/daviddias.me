'use strict';

// Declare app level module which depends on filters, and services
angular.module('personalpage', [
  'ng',
  'ngRoute',
  'personalpage.filters',
  'personalpage.services',
  'personalpage.directives',
  'personalpage.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/'           , { templateUrl:  'views/home.html',
                                        controller:   'home'});
  
  $routeProvider.otherwise({redirectTo: '/'});
}]);