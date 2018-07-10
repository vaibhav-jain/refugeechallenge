/**
 * Router configuration
 */

'use strict';

app.run(
  function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }
)
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('HTTP403Interceptor');
  })
  .config(
    function ($stateProvider, $urlRouterProvider) {
      $stateProvider.
      state(
        'app', {
          abstract: true,
          url: '/app',
          templateUrl: '/tpl/app.html'
        }
      ).
      state(
        'app.refugee', {
          url: '/refugee/',
          templateUrl: '/tpl/refugee.html',
          resolve: {
            deps: ['$ocLazyLoad',
              function( $ocLazyLoad ){
                return $ocLazyLoad.load([
                  'toaster',
                  '/dashboard/js/controllers/refugee.Controllers.js'
                ])
              }
            ]
          }
        }
      );
      $urlRouterProvider.otherwise('/app/refugee/');
    }
  );