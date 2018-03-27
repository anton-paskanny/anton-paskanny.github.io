angular.module('testApp').config(['$routeProvider', function($routeProvider) {

  $routeProvider.
    when('/', {
      template: '<articles-list></articles-list>'
    }).
    when('/article/:type', {
      template: '<article-form></article-form>',
    }).
    when('/article/:type/:id', {
      template: '<article-form></article-form>',
    })
}]);
