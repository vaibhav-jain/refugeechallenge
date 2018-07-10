/**
 * AngularJs app module
 */

var app = angular.module('app')
  .config(function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
    app.controller = $controllerProvider.register;
    app.directive  = $compileProvider.directive;
    app.filter     = $filterProvider.register;
    app.factory    = $provide.factory;
    app.service    = $provide.service;
    app.constant   = $provide.constant;
    app.value      = $provide.value;
  })
  // Translation configuration
  .config(function($translateProvider){
    // Register a loader for the static files
    // So, the module will search missing translation tables under the specified urls.
    // Those urls are [prefix][langKey][suffix].
    $translateProvider.useStaticFilesLoader({
      prefix: '/dashboard/l10n/',
      suffix: '.js'
    });
    // Tell the module what language to use by default
    $translateProvider.preferredLanguage('en');
    // Tell the module to store the language in the local storage
    $translateProvider.useLocalStorage();
  })
  // Restangular Configuration
  .config(function (RestangularProvider) {
    //set the base url for api calls on our RESTFul services
    var newBaseUrl = "https://refugeechallenge.collaborizm.com/";

    RestangularProvider.setBaseUrl(newBaseUrl);
    // RestangularProvider.setRequestSuffix("");
  })
  // ocLazyLoad configuration
  .config(function($ocLazyLoadProvider) {
    var debug = false;
    var events = false;
    if (window.location.hostname != "https://www.kaizentech.io/") {
      events = debug = true;
    }
    $ocLazyLoadProvider.config({
      debug:  debug,
      events: events
    })
  })
  .config(function (datepickerConfig) {
    datepickerConfig.showWeeks = false;
  });