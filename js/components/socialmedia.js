angular.module('socialMedia', []);

angular.
module('socialMedia').
component('socialMedia', {
    templateUrl: "js/components/socialmedia.template.html",
    controller: ['$http', PhoneListController]
});

function PhoneListController($http) {
    var self = this;

    var element = 'none';

    function fb() {
        return 'img/socialMedia/fbhover.png';
    }
    // $http.get('phones/phones.json').then(function(response) {
    //     self.phones = response.data;
    // });
}
