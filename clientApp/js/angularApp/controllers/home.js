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
