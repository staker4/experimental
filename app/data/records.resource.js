angular
    .module('app.data')
    .factory('recordsResource', recordsResource);

function recordsResource($resource) {
    return $resource("/api/records/:id");
}