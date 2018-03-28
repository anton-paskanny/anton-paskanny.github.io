var FormController = function(articlesFactory, $routeParams, $location) {
    switch ($routeParams.type) {
        case 'add':
            var articles = articlesFactory.getAllArticles();
            
            this.title = 'Add new article';
            this.submitTitle = 'Add';
            this.article = {
                title: '',
                date: '',
                content: ''
            };
            this.submitHandler = function() {
                
                this.article.id = articles.length + 1;
                articlesFactory.addArticle(this.article);

                $location.path('/');
            }
            break;
        case 'edit':
            this.title = 'Edit task';
            this.submitTitle = 'Edit';

            var articleToEdit = articlesFactory.findArticle($routeParams.id);
            articleToEdit.date = new Date(articleToEdit.date);

            this.article = articleToEdit;

            this.submitHandler = function() {
                
                articlesFactory.editArticle($routeParams.id, this.article);

                $location.path('/');
            }

            break;
        default:
            this.title = 'Kek';
    }
}

FormController.$inject = ['articlesFactory', '$routeParams', '$location'];

angular.module('testApp').component('articleForm', {
    templateUrl: '/templates/articleForm.html',
    controller: FormController
});