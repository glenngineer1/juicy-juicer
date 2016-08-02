"use strict";

app.controller("recipesCtrl", function($scope, DataFactory, AuthFactory, $route) {
  DataFactory.getRecipeList()
  .then(function(recipeCollection) {
    $scope.recipes = recipeCollection;
    $scope.ingredients = recipeCollection.ingredients;
    $scope.userId =AuthFactory.getUser();
  });
});
