var АrticleDetailController = function(articlesFactory, $location) {
    this.editArticle = function(article) {
        $location.path('/article/edit/' + article.id);
    }

    this.deleteArticle = function(article) {

        if (window.confirm('Are you sure you want to delete the article "' + article.title + '"?')) {
            articlesFactory.deleteArticle(article);
        }
    }
};

АrticleDetailController.$inject = ["articlesFactory", "$location"];

angular.module('testApp').component('articleDetail', {
    templateUrl: '/templates/articleDetail.html',
    bindings: {
        article: '<'
    },
    controller: АrticleDetailController
});