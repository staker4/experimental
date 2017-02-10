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
        return recordsResource.get({
            id: id
        },completed, failed);

         function completed(data) {
            console.log("Completed getting records");
            console.log(data);
            vm.record = data;
        }

        function failed(error) {
            console.log("Error getting records:" + error);
            $location.url('/');
        }
    }
}