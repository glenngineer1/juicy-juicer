"use strict";

app.controller("createJuiceCtrl", function($scope, DataFactory, AuthFactory, $location) {
  $scope.newRecipe = {
    recipeName: "",
    description: "",
    userId: ""
  };

  DataFactory.getFruitList()
  .then(function(fruitCollection) {
    $scope.fruits = fruitCollection;
    });

  DataFactory.getVeggieList()
  .then(function(veggieCollection) {
    $scope.veggies = veggieCollection;
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
    console.log("selected ingredients", $scope.selection);
  };

  $scope.createNewRecipe = function() {
    $scope.newRecipe.userId = AuthFactory.getUser();
    console.log("userID", $scope.newRecipe.userId);
    DataFactory.addToFavorites($scope.newRecipe)
    .then(function(response) {
      $location.url('/favorites');
    });
  };
});


