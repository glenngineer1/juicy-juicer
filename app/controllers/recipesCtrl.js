"use strict";

app.controller("recipesCtrl", function($scope, DataFactory, AuthFactory, $route, $location) {
    $scope.recipe = {
    recipeName: "",
    description: "",
    userId: ""
  };

    DataFactory.getRecipeList()
    .then(function(recipeCollection) {
      $scope.recipes = recipeCollection;
      $scope.ingredients = recipeCollection.ingredients;
      $scope.userId =AuthFactory.getUser();
    });

    $scope.createRecipeFavorite = function(recipe) {
      console.log("recipe", recipe);
    // console.log("userID", $scope.newRecipe.userId);
    // console.log("$scope.recipe[recipe]", $scope.recipes[recipe]);
    $scope.recipes[recipe].userId = AuthFactory.getUser();
    DataFactory.addToFavorites($scope.recipes[recipe])
    .then(function(response) {
      $location.url('/favorites');
    });
  };
});
