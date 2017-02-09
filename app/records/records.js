angular
    .module('app.records')
    .controller('Records', Records);

function Records($http, $location) {

    var vm = this;
    vm.title = "Records";
    vm.records = [];

    vm.sortType = 'owner';
    vm.sortReverse = false;
    vm.searchRecord = '';

    activate();

    function activate() {
        getRecords().then(function (data) {
            vm.records = data;
        });
    }

    function getRecords() {
        return $http.get('records.json')
            .then(getDataComplete)
            .catch(function (message) {
                $location.url('/');
            });

        function getDataComplete(data, status, headers, config) {
            return data.data;
        }
    }
}