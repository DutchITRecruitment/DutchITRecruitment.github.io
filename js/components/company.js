angular.module('companyInfo', []);

angular.
module('companyInfo').
component('companyInfo', {
    templateUrl: "js/components/company.template.html",
    controller: ['$http', PhoneListController]
});

function PhoneListController($http) {
    var self = this;

    // $http.get('phones/phones.json').then(function(response) {
    //     self.phones = response.data;
    // });
}
