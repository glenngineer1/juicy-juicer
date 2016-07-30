"use strict";

app.controller("myFavoritesCtrl", function($scope, DataFactory, AuthFactory, $route) {
  DataFactory.getFavoriteList()
  .then(function(favoriteCollection) {
    $scope.favorites = favoriteCollection;
    $scope.userId = AuthFactory.getUser();
  });
});
