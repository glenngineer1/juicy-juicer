"use strict";

app.controller("myFavoritesCtrl", function($scope, DataFactory, AuthFactory, $route, $location) {
  var currentUser = AuthFactory.getUser();
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

  $scope.getFavorite = function(itemId) {
    // console.log("itemIdFAVORITES", itemId);
    $location.url(`/edit/${itemId}`);
  };
});
