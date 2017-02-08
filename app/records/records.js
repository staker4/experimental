
import angular from 'angular';
import './records.module';

angular
    .module('app.records')
    .controller('Records', Records);

function Records() {
    var vm = this;
    vm.title = "Records";
}
