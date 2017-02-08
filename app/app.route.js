angular.module('app')
    .config(config);

function config($urlRouterProvider, $stateProvider) {

    var aboutState = {
        name: 'about',
        url: '/about',
        templateUrl: 'about.html'
    }

     var recordsState = {
        name: 'records',
        url: '/records',
        controller: 'Records as vm',
        templateUrl: 'records.html'
    }

    $stateProvider.state(aboutState);
    $stateProvider.state(recordsState);

    $urlRouterProvider.otherwise('/about');
};