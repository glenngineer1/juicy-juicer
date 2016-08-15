  "use strict";

var app = angular.module("JuicyJuicerApp", ['ngRoute'])
.constant('FirebaseURL', "https://juicy-juicer.firebaseio.com/");

app.config(function($routeProvider, FBCreds) {
//   let authConfig = {
//     apiKey: FBCreds.apiKey,
//     authDomain: FBCreds.authDomain
//   };
//   firebase.initializeApp(authConfig);

  $routeProvider.
    when('/', {
      templateUrl: 'partials/splash.html',
      controller: 'splashCtrl'
    })
    .when('/benefits', {
      templateUrl: 'partials/benefits.html',
      controller: 'benefitsCtrl'
    })
    .when('/recipes', {
      templateUrl: 'partials/recipes.html',
      controller: 'recipesCtrl'
    })
    .when('/create', {
      templateUrl: 'partials/createJuice.html',
      controller: 'createJuiceCtrl'
    })
    .when('/favorites', {
      templateUrl: 'partials/myFavorites.html',
      controller: 'myFavoritesCtrl'
    })
    .when('/edit/:itemId', {
      templateUrl: 'partials/edit.html',
      controller: 'editCtrl'
    })
    // .otherwise('/');
});
