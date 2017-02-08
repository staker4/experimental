angular.module('app')
    .config(config);

function config($urlRouterProvider, $stateProvider) {

    var homeState = {
        name: 'home',
        url: '/home',
        templateUrl: 'home.html'
    }

     var recordsState = {
        name: 'records',
        url: '/records',
        controller: 'Records as vm',
        templateUrl: 'records.html'
    }

    $stateProvider.state(homeState);
    $stateProvider.state(recordsState);

    $urlRouterProvider.otherwise('/home');
};