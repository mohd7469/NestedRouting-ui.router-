(function(){

  'use strict';

  angular
    .module('basicApp')
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider) {

    //set-up app's states and their routes
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/awais/day05/02-nestedRoutes/home.view.html',
//          template: '<div><p>This is {{name}} page</p></div>',
        controller: 'HomeCtrl'
      })
      .state('products', {
        url: '/products',
        templateUrl: '/awais/day05/02-nestedRoutes/products.view.html',
//          template: '<div><p>This is {{name}} page</p></div>',
        controller: 'ProductsCtrl'
      })
      .state('events', {
        url: '/events',
        templateUrl: '/awais/day05/02-nestedRoutes/events.view.html',
//          template: '<div><p>This is {{name}} page</p></div>',
        controller: 'EventsCtrl'
      })
      .state('events.details', {
        url: '/:eventId',
        templateUrl: '/awais/day05/02-nestedRoutes/events.details.view.html',
        controller: 'EventsDetailsCtrl'
      })
      .state('notFound', {
        url: '/404',
        templateUrl: '/awais/day05/02-nestedRoutes/404.html'
//          template: '<p>The requested page not found. please use correct URLs.</p>'
      });


    //handle 404/unknown routes
    $urlRouterProvider.otherwise('/404'); //pass the URL instead of state


    //Declare the routes as SPA for SEO
    $locationProvider.hashPrefix('!');

  }

})();