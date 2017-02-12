/**
 * Created by luisdeolpy on 12/02/2017.
 */
(function(){
    'use strict';

    angular.module("scrumboard.demo")
        .run(['$http', run]);

    function run($http){
        $http.defaults.xsrfHeaderName='X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }
})();