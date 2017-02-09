angular
    .module('app.records')
    .controller('Records', Records);

function Records($http, $location) {

    var vm = this;
    vm.title = "Records";
    vm.records = [];
    vm.filteredRecords = [];
    vm.search = search;

    vm.recordSearch = '';
    vm.sortType = 'owner';
    vm.sortReverse = false;

    activate();

    function activate() {
        getData();
    }

    function getData() {

        return getRecords().then(function (data) {
            vm.records = data;

            applyFilter();
            return data;
        });
    }

    function applyFilter() {
        vm.filteredRecords = vm.records.filter(recordFilter);
    }

    function recordFilter(record) {

        if (vm.recordSearch) {

            var lowerSearch = vm.recordSearch.toLowerCase();

            if (textContains(record.owner, lowerSearch)) {
                return true;
            }

            if (record.subrecords) {
                for (var j = 0; j < record.subrecords.length; j++) {
                    if (textContains(record.subrecords[j].owner, lowerSearch)) {
                        return true;
                    }
                }
            }

            return false;
        }

        return true;
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


    function textContains(text, lowerSearchText) {
        return text && -1 !== text.toLowerCase().indexOf(lowerSearchText);
    }

    function search($event) {
        if ($event.keyCode === keyCodes.esc) {
            vm.recordSearch = '';
        }

        applyFilter();
    }

    var keyCodes = {
        backspace: 8,
        tab: 9,
        enter: 13,
        esc: 27,
        space: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        insert: 45,
        del: 46
    };
}