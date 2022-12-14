// Register module
var suggest = angular.module('DAGStore.suggest', ['DAGStore.common']);

// Config module
suggest.config(function ($stateProvider, $urlRouterProvider) {
    // Config Router
    var states = [
        {
            name: 'suggest',
            url: '/suggest',
            templateUrl: '/app/components/admin/suggest/suggestListView.html',
            controller: "suggestListController",
            parent: 'base',
        },
        {
            name: 'edit-suggest',
            url: '/suggest/edit/:id',
            templateUrl: '/app/components/admin/suggest/suggestEditView.html',
            controller: "suggestEditController",
            parent: 'base',
        }
        ];
    states.forEach((state) => $stateProvider.state(state));
});




