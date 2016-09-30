'use strict';

require('es5-shim');
require('es5-sham');

require('jquery');
require('fh-js-sdk/dist/feedhenry-forms.js');
var angular = require('angular');
require('angular-route');

var app = angular.module('todoApp', [ 'ngRoute' , require('fh-wfm-appform')]);

app.constant('VERSION', require('../../package.json').version);

require('./service');
require('./controller');

app.config(function($routeProvider) {

  $routeProvider.when('/todos', {
    templateUrl: 'views/todos.html',
    controller: 'TodoCtrl',
  })
  .when('/imprint', {
    templateUrl: 'views/imprint.html',
    controller: 'ImprintCtrl',
  })
  .otherwise({
    redirectTo: '/todos',
  });
});
