angular.module('siteHeader', []);

angular.
module('siteHeader').
component('siteHeader', {
    templateUrl: "js/components/header.template.html",
    controller: ['$http', PhoneListController]
});

function PhoneListController($http) {
    var self = this;
    self.orderProp = 'age';

    // $http.get('phones/phones.json').then(function(response) {
    //     self.phones = response.data;
    // });
}
