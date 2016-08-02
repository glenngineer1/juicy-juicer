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
      var userRegister = result.uid;
      console.log("register user", userRegister);
    })
    .catch(function(err) {
      console.log(error);
    });
  };

  $scope.login = function () {
    AuthFactory.login($scope.email, $scope.password)
    .then(function(result) {
      // console.log(result);
      var userLogin = result.uid;
      console.log("log in user", userLogin);
    })
    .catch(function(err) {
      console.log(err);
    });
  };

  $scope.logout = function() {
  firebase.auth().signOut().then(function() {
    // AuthFactory.logout();
    console.log("user logged out");
    }, function(error) {
    // An error happened.
    });
  };
});
