
import angular from 'angular';
import './logs.module';

angular
    .module('app.logs')
    .controller('Logs', Logs);

function Logs() {
    var vm = this;
    vm.title = "Logs";
}