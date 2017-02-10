angular
    .module('app.records')
    .controller('RecordsDetail', Records);

function Records(record) {

    var vm = this;
    vm.title = "Records Detail";
    vm.record = record;

    activate();

    function activate() {
    }
}