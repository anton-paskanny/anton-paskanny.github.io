var АrticlesListController = function (arcticlesFactory) {
    var ctrl = this;

    ctrl.articles = arcticlesFactory.getAllArticles();

}

АrticlesListController.$inject = ['articlesFactory'];

angular.module('testApp').component('articlesList', {
    templateUrl: '/templates/articlesList.html',
    controller: АrticlesListController
});