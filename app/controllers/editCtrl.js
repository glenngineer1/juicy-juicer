"use strict";

app.controller("editCtrl", function($scope, DataFactory, $location, $routeParams) {
  $scope.editedRecipe = {
    id: ""
  };

// console.log("routeParams", $routeParams.itemId);
  DataFactory.getFruitList()
  .then(function(fruitCollection) {
    $scope.fruits = fruitCollection;
    });

  DataFactory.getVeggieList()
  .then(function(veggieCollection) {
    $scope.veggies = veggieCollection;
  });

  DataFactory.getFavorite($routeParams.itemId)
  .then(function(singleFavorite) {
    $scope.single = singleFavorite;
    $scope.single.id = $routeParams.itemId;
    // console.log("singleFavorite", singleFavorite);
  });

  $scope.selection = [];
  $scope.toggleSelection = function toggleSelection(ingredientName) {
    var idx = $scope.selection.indexOf(ingredientName);
    if (idx > -1) {
      $scope.selection.splice(idx, 1);
    }
    else {
      $scope.selection.push(ingredientName);
    }
    // console.log("selected ingredients", $scope.selection);
  };

  $scope.saveChanges = function(itemId) {
    console.log("itemId", itemId);
    console.log("scope.single", $scope.single);
    DataFactory.changesToFavorite($scope.single)
    .then(function(response) {
      $location.url('/favorites');
    });
  };
});
