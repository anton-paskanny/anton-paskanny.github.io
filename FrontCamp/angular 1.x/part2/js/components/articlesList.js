var АrticlesListController = function (arcticlesFactory) {

    this.articles = arcticlesFactory.getAllArticles();
    this.order = "-date";
}

АrticlesListController.$inject = ['articlesFactory'];

angular.module('testApp').component('articlesList', {
    templateUrl: '/templates/articlesList.html',
    controller: АrticlesListController
});