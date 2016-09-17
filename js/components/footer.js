angular.module('siteFooter', []);

angular.
module('siteFooter').
component('siteFooter', {
    templateUrl: "js/components/footer.template.html",
    controller: ['$http', PhoneListController]
});

function PhoneListController($http) {
    var self = this;

    // $http.get('phones/phones.json').then(function(response) {
    //     self.phones = response.data;
    // });
}
