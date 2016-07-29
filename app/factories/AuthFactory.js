"use strict";

app.factory("AuthFactory", function() {

  let currentUserId = null;

  let isAuthenticated = function() {
    return (currentUserId) ? true : false;
  };

  let getUser = function() {
    return currentUserId;
  };

  let setUser = function(id) {
    currentUserId = id;
    // console.log(currentUserId, "currentUserId")
  };

  let register = function (email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.warn(errorCode, errorMessage);
    });
  };

  let login = function (email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.warn(errorCode, errorMessage);
    });
  };

  return {
    isAuthenticated: isAuthenticated, getUser: getUser, setUser: setUser, register: register, login: login
    }
});

app.run(["$location", "FBCreds", "AuthFactory", function ($location, FBCreds, AuthFactory) {
  let authConfig = {
    apiKey: FBCreds.apiKey,
    authDomain: FBCreds.authDomain
  };

  firebase.initializeApp(authConfig);

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      authFactory.setUser(user.uid);
      $location.url("/");
    } else {
      $location.url("/");
      authFactory.setUser(null); //this is to rest the current user to hide board.
    }
  });
}]);
