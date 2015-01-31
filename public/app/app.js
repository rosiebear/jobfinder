angular.module('app', []);

angular.module('app').controller('testCtrl', function($scope) {
    $scope.jobs = [{
        title: 'Sales Person',
        description: 'You will fly dragons'
    }, {
        title: 'Account',
        description: 'You will use a keyboard'
    }];
});