"use strict";

app.controller("myFavoritesCtrl", function($scope, DataFactory, AuthFactory, $route) {
  var currentUser = AuthFactory.getUser();
  var counter = 0;
  // var favID = "";
  // console.log("CU", currentUser);
  DataFactory.getFavoriteList(currentUser)
  .then(function(favoriteCollection) {
    $scope.favorites = favoriteCollection;
    $scope.userId = AuthFactory.getUser();
    $scope.counter = counter++;
    // console.log("fc", favoriteCollection);
  });
    // console.log("favoriteID", favID);
});
