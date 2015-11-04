/**
 * Created by dchandana on 2/10/2015.
 */
ekinApp.factory("UserData",function($resource){

        var userdata_path=$resource('/data/userdetails/userdetails.json');
        return{
            save_UserData:function(userprofile){

                userdata_path.query(function(data){

                        userdata_path.save(userprofile);


                        }

                );


            }
        };

    }

);