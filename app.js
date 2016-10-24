var formExercise = angular.module('formExercise', [])

formExercise.controller('MainController', function($scope) {
  $scope.submitForm = function(isValid) {
    if(isValid) {
      console.log('success!');
    }
  }
})
