"use strict";

app.controller("navbarCtrl", function($scope) {
  $scope.navItems = [
    {
      name: "Home",
      url: "#/"
    },
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
      name: "My Recipes/Favorites",
      url: "#/favorites"
    },
  ];
});
