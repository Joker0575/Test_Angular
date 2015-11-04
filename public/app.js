/**
 * Created by divya on 11/3/2015.
 *//*

'use strict';

*/
/*
var sample = angular.module('sample', ['ngRoute','ui.bootstrap']);
*//*


var app = angular.module('plunker', ['ngRoute', 'ui.bootstrap']);
app.controller('Nav', function($scope) {
});

app.controller('ModalCtrl', function($scope,  $modal,$http) {

    $scope.name = 'theNameHasBeenPassed';

    $scope.showModal = function(id) {

        $scope.getCustomerId=function(){
            $http({
                method: 'get',
                type:'json',
                url: url+'/'+id
            }).
                success(function(data) {
                    console.log(data);
                    //objLength=Object.keys(data).length;
                    //your code when success
                    $scope.client = data;

                }).
                error(function(status) {
                    //your code when fails
                    console.log(status+"error get");
                });
        }

        $scope.opts = {
            backdrop: true,
            backdropClick: true,
            dialogFade: false,
            keyboard: true,
            templateUrl : 'modalContent.html',
            controller : ModalInstanceCtrl,
            resolve: {} // empty storage
        };


        $scope.opts.resolve.item = function() {
            return angular.copy({name:$scope.name}); // pass name to Dialog
        }

        var modalInstance = $modal.open($scope.opts);

        modalInstance.result.then(function(){
            //on ok button press
        },function(){
            //on cancel button press
            console.log("Modal Closed");
        });
    };
})

var ModalInstanceCtrl = function($scope, $modalInstance, $modal, item) {

    $scope.item = item;

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}


*/
