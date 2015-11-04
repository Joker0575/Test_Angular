
var app = angular.module('plunker', ['ngRoute', 'ui.bootstrap']);
app.controller('Nav', function($scope) {
});
idd="";
app.controller('ModalCtrl', function($scope,  $modal,$http) {
    clientData={first_name:''};

    $scope.name = 'theNameHasBeenPassed';
    $scope.showModal = function(id) {
        console.log("model"+""+id);
        (function(){
            $http({
                method: 'get',
                type:'json',
                url: url+'/'+id
            }).
                success(function(data) {
                    console.log("success"+data.id,data.first_name);
                    //objLength=Object.keys(data).length;
                    //your code when success
                    idd=data.first_name;
                    clientData.first_name=data.first_name;
                    console.log(clientData.first_name);
                    $scope.getClient = data;

                }).
                error(function(status) {
                    //your code when fails
                    console.log(status+"error get");
                });
        })();
console.log("clientData",clientData.first_name);
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
            return angular.copy({first_name:idd}); // pass name to Dialog
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
    console.log(item);

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}

