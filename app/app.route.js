angular.module('app')
    .config(config);

function config($urlRouterProvider, $stateProvider) {

    var homeState = {
        name: 'home',
        url: '/',
        templateUrl: 'home.html'
    }

    var recordsState = {
        name: 'records',
        url: '/records',
        controller: 'Records as vm',
        templateUrl: 'records.html'
    }

    var recordsDetailsState = {
        name: 'recordsDetail',
        url: '/records/:id',
        controller: 'RecordsDetail as vm',
        templateUrl: 'recordsDetail.html',
        resolve: {
            record: function ( $stateParams) {
                var id = $stateParams.id;
                return id;
            }
        }
    }

    $stateProvider.state(homeState);
    $stateProvider.state(recordsState);
    $stateProvider.state(recordsDetailsState);

    $urlRouterProvider.otherwise('/');
};