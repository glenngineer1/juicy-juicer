"use strict";

app.controller("createJuiceCtrl", function($scope, DataFactory, AuthFactory, $route, $location) {
  $scope.newJuice = {

  };

  DataFactory.getFruitList()
  .then(function(fruitCollection) {
    $scope.fruits = fruitCollection;
  });

  DataFactory.getVeggieList()
  .then(function(veggieCollection) {
    $scope.veggies = veggieCollection;
  });

});

  // $scope.createNewJuice = function() {
  //   $scope.newJuice.userId = AuthFactory.getUser();
  //   DataFactory.addToFavorites($scope.newJuice)
  //   .then(function(response) {
  //     $location.url('/favorites')
  //   });
  // };
// });
