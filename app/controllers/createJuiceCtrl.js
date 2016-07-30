"use strict";

app.controller("createJuiceCtrl", function($scope, DataFactory, AuthFactory, $route, $location) {
  $scope.newJuice = {

  };

  $scope.createNewJuice = function() {
    $scope.newJuice.userId = AuthFactory.getUser();
    DataFactory.addToFavorites($scope.newJuice)
    .then(function(response) {
      $location.url('/favorites')
    })
  }
});
