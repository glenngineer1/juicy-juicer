"use strict";

app.controller("myFavoritesCtrl", function($scope, DataFactory, AuthFactory, $route) {
  var currentUser = AuthFactory.getUser();
  // var favID = "";
  // console.log("CU", currentUser);
  DataFactory.getFavoriteList(currentUser)
  .then(function(favoriteCollection) {
    $scope.favorites = favoriteCollection;
    $scope.userId = AuthFactory.getUser();
    // for (var i = 0; i < favoriteCollection.length; i++) {
    //   if(favoriteCollection[i].userId !== null && favoriteCollection[i].userId !== undefined) {
    //     console.log((favoriteCollection[i].userId));
    //   } else if (favoriteCollection[i].userId === currentUser) {

    //       console.log(currentUser);
    //   }
    // }
    // var favID = favoriteCollection[2].id;
  });
    // console.log("favoriteID", favID);
});
