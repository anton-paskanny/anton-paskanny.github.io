var AddArticleBtnController = function($location) {
   
    this.redirect = function() {
        $location.path('/article/add');
    }
}

AddArticleBtnController.$inject = ['$location'];

angular.module('testApp').component('addArticleBtn', {
    template: '<button class="btn btn-dark" ng-click="$ctrl.redirect()">Add article</button>',
    controller: AddArticleBtnController
});