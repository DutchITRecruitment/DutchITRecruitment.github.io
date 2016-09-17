angular.module('siteMotto', []);

angular.
module('siteMotto').
component('siteMotto', {
    templateUrl: "js/components/motto.template.html",
    controller: ['$http', PhoneListController]
});

function PhoneListController($http) {
    var self = this;

    // $http.get('phones/phones.json').then(function(response) {
    //     self.phones = response.data;
    // });
}
