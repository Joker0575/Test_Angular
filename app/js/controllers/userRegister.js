/**
 * Created by dchandana on 2/10/2015.
 */
'use strict';

ekinApp.controller('userRegister',
    function userRegister($scope,UserData) {
        $scope.user = {};
        $scope.saveProfile=function(user,form){
            //window.alert("this is invalid");
            if(form.$valid)
            {
                UserData.save_UserData(user);

            }
        };

        $scope.cancleProfile=function(){
            window.location="/Registration.html";
        };


    }
);
