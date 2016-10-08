angular.module('roles', []);

angular.
module('roles').
component('roles', {
    templateUrl: "js/components/roles.template.html",
    controller: ['$http', RolesController]
});

function RolesController($http) {
    var self = this;
    self.showSection = 0;
}
