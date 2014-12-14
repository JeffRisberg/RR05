// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require_tree .
//= require_self

var AoRApp = angular.module('AoR', [])
    .controller('MainController', ['$scope', '$http',
        function ($scope, $http) {
            $http.get("/questions").then(function (response) {
                $scope.questions = response.data;
            });

            $scope.addQuestion = function () {
                $http.post("/questions", {
                    email: $scope.email,
                    body: $scope.body
                }).success(function (data) {
                    $scope.questions.push(data);
                    $('#askQuestionModal').hide();
                }).error(function (error) {
                    console.log(error);
                })
            };

            $scope.getAnswers = function (id) {
                $http.get("/answers/for_question/" + id, {
                }).success(function (data) {
                    $scope.answers = data;
                    console.log(data);
                }).error(function (error) {
                    console.log(error);
                })
            };
        }]);
