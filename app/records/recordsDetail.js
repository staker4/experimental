angular
    .module('app.records')
    .controller('RecordsDetail', RecordsDetail);

function RecordsDetail($stateParams, $location, recordsResource) {

    var vm = this;
    vm.title = "Records Detail";
    vm.record = null;

    activate();

    function activate() {
        getRequestRecord();
    }

    function getRequestRecord() {

        var id = $stateParams.id;

        vm.record = recordsResource.get({
            id: id
        }, getRecordCompleted, getRecordFailed, );

        function getRecordCompleted(data) {
            console.log("record found");
        };

        function getRecordFailed(error) {
            console.log("record not found:");
            $location.url('/');
        };
    }
}