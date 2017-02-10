angular
    .module('app.records')
    .controller('Records', Records);

function Records($http, $location, $resource, recordsResource) {

    var vm = this;
    vm.title = "Records";
    vm.records = [];
    vm.recordsCount = 0;
    vm.filteredRecords = [];
    vm.selected = null;
    vm.recordSearch = '';
    vm.sortType = 'owner';
    vm.sortReverse = false;

    vm.search = search;
    vm.selectRecord = selectRecord;

    activate();

    function activate() {
        getRecords();
    }

    function getRecords() {
        recordsResource.query(completed, failed);

        var records = recordsResource.query({}, completed, failed);

        function completed(data) {
            console.log("Completed getting records");
            vm.records = [].concat(data);
            applyFilter();
        }

        function failed(error) {
            console.log("Error getting records:" + error);
        }
    }

    function applyFilter() {
        vm.filteredRecords = vm.records.filter(recordFilter);
        vm.recordsCount = vm.filteredRecords.length;
        vm.selected = vm.filteredRecords[0];
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

    function textContains(text, lowerSearchText) {
        return text && -1 !== text.toLowerCase().indexOf(lowerSearchText);
    }

    function search($event) {
        if ($event.keyCode === keyCodes.esc) {
            vm.recordSearch = '';
        }

        applyFilter();
    }

    function selectRecord(record) {
        vm.selected = record;
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