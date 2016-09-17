angular.module('roles', []);

angular.
module('roles').
component('roles', {
    templateUrl: "js/components/roles.template.html",
    controller: ['$http', PhoneListController]
});

function PhoneListController($http) {
    var self = this;
    self.orderProp = 'age';

    // $http.get('phones/phones.json').then(function(response) {
    //     self.phones = response.data;
    // });
}
