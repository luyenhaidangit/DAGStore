// Register App
var app = angular.module('DAGStore', [
    'DAGStore.brand',
    'DAGStore.category',
    'DAGStore.product',
    'DAGStore.menurecord',
    'DAGStore.common']);

// Config app
app.config(function($stateProvider, $urlRouterProvider){
    // Config Router
    var states = [
    {
      name: 'dashboard',
      url: '/dashboard',
      templateUrl: '/app/components/home/homeView.html',
      controller: "homeController",
    },
    {
      name: 'error',
      url: '/error',
      templateUrl: '/app/components/error/errorView.html'
    }];
    states.forEach((state) => $stateProvider.state(state));
    $urlRouterProvider.otherwise('/dashboard');
});

// Register App Home
var app = angular.module('DAGStoreHome', [
    'DAGStoreHome.index',
    'DAGStoreHome.category',
    'DAGStoreHome.product',
    'DAGStoreHome.cart',
    'DAGStore.common']);

// Config App Home
app.config(function ($stateProvider, $urlRouterProvider) {
    // Config Router
    var states = [
        {
            name: 'index',
            url: '/index',
            templateUrl: '/app/components/index/indexView.html',
            controller: "indexController",
        },
        ];
    states.forEach((state) => $stateProvider.state(state));
    $urlRouterProvider.otherwise('/index');
});

