angular.module('testApp').factory('articlesFactory', ['dataService', function(dataService) {

    var articles = dataService.query();

    function modifyIncomingArticle(article) {
        var newArticle = Object.assign({}, article);

        newArticle.date = newArticle.date.toJSON();

        return newArticle;
    }

    return {
        getAllArticles: function() {
            return articles;
        },
        addArticle: function(article) {
            articles.push(modifyIncomingArticle(article));
        },
        deleteArticle: function(article) {
            articles.splice(articles.indexOf(article), 1);
        },
        editArticle: function(id, article) {
            var oldTask = articles.indexOf(this.findArticle(id));

            articles[oldTask] = modifyIncomingArticle(article);
        },
        findArticle: function(id) {
            for (var i = 0, length = articles.length; i < length; i++) {
                if (articles[i].id == id) {
                    return articles[i];
                }
            }

            return null;
        }
    }
}]);