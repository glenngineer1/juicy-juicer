"use strict";

app.controller("createJuiceCtrl", function($scope, DataFactory, AuthFactory, $route, $location) {
  $scope.newRecipe = {
    recipeName: "",
    description: "",
    userId: "",
    ingredient1: {
      name: "",
      ounces: ""
    },
    ingredient2: {
      name: "",
      ounces: ""
    },
    ingredient3: {
      name: "",
      ounces: ""
    },
    ingredient4: {
      name: "",
      ounces: ""
    },
    ingredient5: {
      name: "",
      ounces: ""
    },
    ingredient6: {
      name: "",
      ounces: ""
    },
    ingredient7: {
      name: "",
      ounces: ""
    },
    ingredient8: {
      name: "",
      ounces: ""
    }
  };

  DataFactory.getFruitList()
  .then(function(fruitCollection) {
    $scope.fruits = fruitCollection;
  });

  DataFactory.getVeggieList()
  .then(function(veggieCollection) {
    $scope.veggies = veggieCollection;
  });

  $scope.createNewRecipe = function() {
    $scope.newRecipe.userId = AuthFactory.getUser();
    console.log("userID", $scope.newRecipe.userId);
    DataFactory.addToFavorites($scope.newRecipe)
    .then(function(response) {
      $location.url('/favorites');
    });
  };
});


