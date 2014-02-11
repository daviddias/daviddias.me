(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  
  ga('create', 'UA-42568283-1', 'daviddias.me');
  ga('send', 'pageview');
},{}],3:[function(require,module,exports){
'use strict';

personalpageControllers
  .controller('home', function ($scope) {
    console.log('hey');

    $scope.things = [{
      imageurl: '/img/tnf.png',
      description: 'hey',
      url: 'http://thenodefirm.com'
    },
    {
      imageurl: '/img/lxjs.png',
      description: 'hey',
      url: 'http://lxjs.org'
    },
    {
      imageurl: '/img/tss.png',
      description: 'hey',
      url: 'http://startupscholarship.org'
    },
    {
      imageurl: '/img/ist.png',
      description: 'hey',
      url: 'http://www.ist.utl.pt'
    },
    {
      imageurl: '/img/ieee.png',
      description: 'hey',
      url: 'http://www.ieee.org'
    },
    {
      imageurl: '/img/cs.png',
      description: 'hey',
      url: 'http://www.computer.org'
    },
    {
      imageurl: '/img/kairos.png',
      description: 'hey',
      url: 'http://kairossociety.pt'
    },
    {
      imageurl: '/img/tnf.png',
      description: 'hey',
      url: 'http://thenodefirm.com'
    },
    {
      imageurl: '/img/gsa.png',
      description: 'hey',
      url: 'https://docs.google.com/file/d/0BxpOFqyO4fUYWnRvLWhYd1U5eDg'
    }];

    require('./_analytics.js');
  });

},{"./_analytics.js":2}],4:[function(require,module,exports){
personalpageControllers = angular.module('personalpage.controllers', []);

require('./home.js');
},{"./home.js":3}],5:[function(require,module,exports){
'use strict';

/* Directives */

angular.module('personalpage.directives', [])
  .directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
},{}],6:[function(require,module,exports){
'use strict';

/* Filters */

angular.module('personalpage.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);
},{}],7:[function(require,module,exports){
'use strict';

/* Services */

angular.module('personalpage.services', []).
  value('version', '0.1');
},{}],8:[function(require,module,exports){
require('./angularApp/app.js');
require('./angularApp/controllers');
require('./angularApp/directives');
require('./angularApp/filters');
require('./angularApp/services');



},{"./angularApp/app.js":1,"./angularApp/controllers":4,"./angularApp/directives":5,"./angularApp/filters":6,"./angularApp/services":7}]},{},[8])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvRGF2aWREaWFzL0Ryb3Bib3gvQ29kZS9kYXZpZGRpYXMubWUvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9EYXZpZERpYXMvRHJvcGJveC9Db2RlL2RhdmlkZGlhcy5tZS9jbGllbnRBcHAvanMvYW5ndWxhckFwcC9hcHAuanMiLCIvVXNlcnMvRGF2aWREaWFzL0Ryb3Bib3gvQ29kZS9kYXZpZGRpYXMubWUvY2xpZW50QXBwL2pzL2FuZ3VsYXJBcHAvY29udHJvbGxlcnMvX2FuYWx5dGljcy5qcyIsIi9Vc2Vycy9EYXZpZERpYXMvRHJvcGJveC9Db2RlL2RhdmlkZGlhcy5tZS9jbGllbnRBcHAvanMvYW5ndWxhckFwcC9jb250cm9sbGVycy9ob21lLmpzIiwiL1VzZXJzL0RhdmlkRGlhcy9Ecm9wYm94L0NvZGUvZGF2aWRkaWFzLm1lL2NsaWVudEFwcC9qcy9hbmd1bGFyQXBwL2NvbnRyb2xsZXJzL2luZGV4LmpzIiwiL1VzZXJzL0RhdmlkRGlhcy9Ecm9wYm94L0NvZGUvZGF2aWRkaWFzLm1lL2NsaWVudEFwcC9qcy9hbmd1bGFyQXBwL2RpcmVjdGl2ZXMvaW5kZXguanMiLCIvVXNlcnMvRGF2aWREaWFzL0Ryb3Bib3gvQ29kZS9kYXZpZGRpYXMubWUvY2xpZW50QXBwL2pzL2FuZ3VsYXJBcHAvZmlsdGVycy9pbmRleC5qcyIsIi9Vc2Vycy9EYXZpZERpYXMvRHJvcGJveC9Db2RlL2RhdmlkZGlhcy5tZS9jbGllbnRBcHAvanMvYW5ndWxhckFwcC9zZXJ2aWNlcy9pbmRleC5qcyIsIi9Vc2Vycy9EYXZpZERpYXMvRHJvcGJveC9Db2RlL2RhdmlkZGlhcy5tZS9jbGllbnRBcHAvanMvcGVyc29uYWxwYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBEZWNsYXJlIGFwcCBsZXZlbCBtb2R1bGUgd2hpY2ggZGVwZW5kcyBvbiBmaWx0ZXJzLCBhbmQgc2VydmljZXNcbmFuZ3VsYXIubW9kdWxlKCdwZXJzb25hbHBhZ2UnLCBbXG4gICduZycsXG4gICduZ1JvdXRlJyxcbiAgJ3BlcnNvbmFscGFnZS5maWx0ZXJzJyxcbiAgJ3BlcnNvbmFscGFnZS5zZXJ2aWNlcycsXG4gICdwZXJzb25hbHBhZ2UuZGlyZWN0aXZlcycsXG4gICdwZXJzb25hbHBhZ2UuY29udHJvbGxlcnMnXG5dKS5cbmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIpIHtcbiAgJHJvdXRlUHJvdmlkZXIud2hlbignLycgICAgICAgICAgICwgeyB0ZW1wbGF0ZVVybDogICd2aWV3cy9ob21lLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICAgJ2hvbWUnfSk7XG4gIFxuICAkcm91dGVQcm92aWRlci5vdGhlcndpc2Uoe3JlZGlyZWN0VG86ICcvJ30pO1xufV0pOyIsIiAgKGZ1bmN0aW9uKGkscyxvLGcscixhLG0pe2lbJ0dvb2dsZUFuYWx5dGljc09iamVjdCddPXI7aVtyXT1pW3JdfHxmdW5jdGlvbigpe1xuICAoaVtyXS5xPWlbcl0ucXx8W10pLnB1c2goYXJndW1lbnRzKX0saVtyXS5sPTEqbmV3IERhdGUoKTthPXMuY3JlYXRlRWxlbWVudChvKSxcbiAgbT1zLmdldEVsZW1lbnRzQnlUYWdOYW1lKG8pWzBdO2EuYXN5bmM9MTthLnNyYz1nO20ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSxtKVxuICAgIH0pKHdpbmRvdyxkb2N1bWVudCwnc2NyaXB0JywnLy93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vYW5hbHl0aWNzLmpzJywnZ2EnKTtcbiAgXG4gIGdhKCdjcmVhdGUnLCAnVUEtNDI1NjgyODMtMScsICdkYXZpZGRpYXMubWUnKTtcbiAgZ2EoJ3NlbmQnLCAncGFnZXZpZXcnKTsiLCIndXNlIHN0cmljdCc7XG5cbnBlcnNvbmFscGFnZUNvbnRyb2xsZXJzXG4gIC5jb250cm9sbGVyKCdob21lJywgZnVuY3Rpb24gKCRzY29wZSkge1xuICAgIGNvbnNvbGUubG9nKCdoZXknKTtcblxuICAgICRzY29wZS50aGluZ3MgPSBbe1xuICAgICAgaW1hZ2V1cmw6ICcvaW1nL3RuZi5wbmcnLFxuICAgICAgZGVzY3JpcHRpb246ICdoZXknLFxuICAgICAgdXJsOiAnaHR0cDovL3RoZW5vZGVmaXJtLmNvbSdcbiAgICB9LFxuICAgIHtcbiAgICAgIGltYWdldXJsOiAnL2ltZy9seGpzLnBuZycsXG4gICAgICBkZXNjcmlwdGlvbjogJ2hleScsXG4gICAgICB1cmw6ICdodHRwOi8vbHhqcy5vcmcnXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZXVybDogJy9pbWcvdHNzLnBuZycsXG4gICAgICBkZXNjcmlwdGlvbjogJ2hleScsXG4gICAgICB1cmw6ICdodHRwOi8vc3RhcnR1cHNjaG9sYXJzaGlwLm9yZydcbiAgICB9LFxuICAgIHtcbiAgICAgIGltYWdldXJsOiAnL2ltZy9pc3QucG5nJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnaGV5JyxcbiAgICAgIHVybDogJ2h0dHA6Ly93d3cuaXN0LnV0bC5wdCdcbiAgICB9LFxuICAgIHtcbiAgICAgIGltYWdldXJsOiAnL2ltZy9pZWVlLnBuZycsXG4gICAgICBkZXNjcmlwdGlvbjogJ2hleScsXG4gICAgICB1cmw6ICdodHRwOi8vd3d3LmllZWUub3JnJ1xuICAgIH0sXG4gICAge1xuICAgICAgaW1hZ2V1cmw6ICcvaW1nL2NzLnBuZycsXG4gICAgICBkZXNjcmlwdGlvbjogJ2hleScsXG4gICAgICB1cmw6ICdodHRwOi8vd3d3LmNvbXB1dGVyLm9yZydcbiAgICB9LFxuICAgIHtcbiAgICAgIGltYWdldXJsOiAnL2ltZy9rYWlyb3MucG5nJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnaGV5JyxcbiAgICAgIHVybDogJ2h0dHA6Ly9rYWlyb3Nzb2NpZXR5LnB0J1xuICAgIH0sXG4gICAge1xuICAgICAgaW1hZ2V1cmw6ICcvaW1nL3RuZi5wbmcnLFxuICAgICAgZGVzY3JpcHRpb246ICdoZXknLFxuICAgICAgdXJsOiAnaHR0cDovL3RoZW5vZGVmaXJtLmNvbSdcbiAgICB9LFxuICAgIHtcbiAgICAgIGltYWdldXJsOiAnL2ltZy9nc2EucG5nJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnaGV5JyxcbiAgICAgIHVybDogJ2h0dHBzOi8vZG9jcy5nb29nbGUuY29tL2ZpbGUvZC8wQnhwT0ZxeU80ZlVZV25SdkxXaFlkMVU1ZURnJ1xuICAgIH1dO1xuXG4gICAgcmVxdWlyZSgnLi9fYW5hbHl0aWNzLmpzJyk7XG4gIH0pO1xuIiwicGVyc29uYWxwYWdlQ29udHJvbGxlcnMgPSBhbmd1bGFyLm1vZHVsZSgncGVyc29uYWxwYWdlLmNvbnRyb2xsZXJzJywgW10pO1xuXG5yZXF1aXJlKCcuL2hvbWUuanMnKTsiLCIndXNlIHN0cmljdCc7XG5cbi8qIERpcmVjdGl2ZXMgKi9cblxuYW5ndWxhci5tb2R1bGUoJ3BlcnNvbmFscGFnZS5kaXJlY3RpdmVzJywgW10pXG4gIC5kaXJlY3RpdmUoJ2FwcFZlcnNpb24nLCBbJ3ZlcnNpb24nLCBmdW5jdGlvbih2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHNjb3BlLCBlbG0sIGF0dHJzKSB7XG4gICAgICBlbG0udGV4dCh2ZXJzaW9uKTtcbiAgICB9O1xuICB9XSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBGaWx0ZXJzICovXG5cbmFuZ3VsYXIubW9kdWxlKCdwZXJzb25hbHBhZ2UuZmlsdGVycycsIFtdKS5cbiAgZmlsdGVyKCdpbnRlcnBvbGF0ZScsIFsndmVyc2lvbicsIGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odGV4dCkge1xuICAgICAgcmV0dXJuIFN0cmluZyh0ZXh0KS5yZXBsYWNlKC9cXCVWRVJTSU9OXFwlL21nLCB2ZXJzaW9uKTtcbiAgICB9XG4gIH1dKTsiLCIndXNlIHN0cmljdCc7XG5cbi8qIFNlcnZpY2VzICovXG5cbmFuZ3VsYXIubW9kdWxlKCdwZXJzb25hbHBhZ2Uuc2VydmljZXMnLCBbXSkuXG4gIHZhbHVlKCd2ZXJzaW9uJywgJzAuMScpOyIsInJlcXVpcmUoJy4vYW5ndWxhckFwcC9hcHAuanMnKTtcbnJlcXVpcmUoJy4vYW5ndWxhckFwcC9jb250cm9sbGVycycpO1xucmVxdWlyZSgnLi9hbmd1bGFyQXBwL2RpcmVjdGl2ZXMnKTtcbnJlcXVpcmUoJy4vYW5ndWxhckFwcC9maWx0ZXJzJyk7XG5yZXF1aXJlKCcuL2FuZ3VsYXJBcHAvc2VydmljZXMnKTtcblxuXG4iXX0=
