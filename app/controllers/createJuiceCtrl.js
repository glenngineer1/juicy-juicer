"use strict";

app.controller("createJuiceCtrl", function($scope, DataFactory, AuthFactory, $location) {
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

  // $scope.fruits = ['apple', 'apricot', 'banana', 'blackberry', 'blueberry', 'cherry', 'cranberry', 'grape', 'grapefruit', 'guava', 'kiwi', 'lemon', 'lime', 'mango', 'orange', 'peach', 'pear', 'pineapple', 'raspberry', 'strawberry'];
  $scope.selection = [];
  $scope.toggleSelection = function toggleSelection(fruitName) {
    var idx = $scope.selection.indexOf(fruitName);
    if (idx > -1) {
      $scope.selection.splice(idx, 1);
    }
    else {
      $scope.selection.push(fruitName);
    }
    console.log("SS", $scope.selection);
  };

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


