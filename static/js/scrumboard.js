(function(){
        'use strict';
        angular.module('scrumboard.demo', ['ngRoute'])
            .controller('ScrumboardController', [ '$scope', '$http', ScrumboardController]);

        function ScrumboardController($scope, $http){

            $scope.add = function(list, title){
                var card = {
                    title: title,
                    list: list.id
                };
                $http.post('/scrumboard/cards/', card)
                    .then(function(response){
                        list.cards.push(response.data);
                    },
                    function(){
                        alert("Something went wrong!");
                    });
            };

            $scope.logout = function(){
                $http.get('/auth_api/logout/')
                    .then(function(){
                        $location.url('/login');
                    });
            };
            $scope.data = [];
            $http.get('/scrumboard/lists/')
                .then(function(response){
                    $scope.data = response.data;
                });
        }
    }());