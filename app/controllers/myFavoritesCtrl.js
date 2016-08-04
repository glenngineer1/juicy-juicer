"use strict";

app.controller("myFavoritesCtrl", function($scope, DataFactory, AuthFactory, $route) {
  var currentUser = AuthFactory.getUser();
  // var favID = "";
  // console.log("CU", currentUser);
  DataFactory.getFavoriteList(currentUser)
  .then(function(favoriteCollection) {
    $scope.favorites = favoriteCollection;
    $scope.userId = AuthFactory.getUser();
    // console.log("fc", $scope.favorites);
  });

  $scope.deleteFavorite = function(itemId) {
    DataFactory.deleteFavorite(itemId)
    .then(function(response) {
      $route.reload();
    });
  };

  $scope.editFavorite = function(itemId) {
    DataFactory.editFavorite(itemId)
    // console.log("favoriteID", favID);
  }
});
