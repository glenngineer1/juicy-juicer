"use strict";

app.controller("navbarCtrl", function($scope, $route, AuthFactory) {
  $scope.navItems = [
    {
      name: "Benefits",
      url: "#/benefits"
    },
    {
      name: "Recipes",
      url: "#/recipes"
    },
    {
      name: "Create Juice",
      url: "#/create"
    },
    {
      name: "My Favorites",
      url: "#/favorites"
    },
  ];

    $scope.register = function () {
    AuthFactory.register($scope.email, $scope.password)
    .then(function(result) {
      // var user = result.uid;
      console.log("logged in user", result.uid);
    })
    .catch(function(err) {
      console.log(error);
    });
  };

  $scope.login = function () {
    AuthFactory.login($scope.email, $scope.password)
    .then(function(result) {
      console.log("logged in", result);
    })
    .catch(function(err) {
      console.log(err);
    });
  };
});
