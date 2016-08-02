"use strict";

app.factory("DataFactory", function(FirebaseURL, $q, $http) {

  let getFruitList = function() {
    let fruits = [];
    return $q(function(resolve, reject) {
      $http.get(`${FirebaseURL}/fruits/.json`)
      .success(function(fruitObject) {
        let fruitCollection = fruitObject;
        Object.keys(fruitCollection).forEach(function(key) {
          fruitCollection[key].id=key;
          fruits.push(fruitCollection[key]);
        });
        resolve(fruits);
      })
      .error(function(error) {
        reject(error);
      });
    });
  };

  let getVeggieList = function() {
    let veggies = [];
    return $q(function(resolve, reject) {
      $http.get(`${FirebaseURL}/veggies/.json`)
      .success(function(veggieObject) {
        let veggieCollection = veggieObject;
        Object.keys(veggieCollection).forEach(function(key) {
          veggieCollection[key].id=key;
          veggies.push(veggieCollection[key]);
        });
        resolve(veggies);
      })
      .error(function(error) {
        reject(error);
      });
    });
  };

   let getRecipeList = function() {
    let recipes = [];
    return $q(function(resolve, reject) {
      $http.get(`${FirebaseURL}/recipes/.json`)
      .success(function(recipeObject) {
        let recipeCollection = recipeObject;
        Object.keys(recipeCollection).forEach(function(key) {
          recipeCollection[key].id=key;
          recipes.push(recipeCollection[key]);
        });
        resolve(recipes);
      })
      .error(function(error) {
        reject(error);
      });
    });
  };

    let getFavoriteList = function(currentUser) {
      // console.log("currentUser", favoriteObject);
      // console.log("favID", favID);
    let favorites = [];
    return $q(function(resolve, reject) {
      $http.get(`${FirebaseURL}/favorites.json?orderBy="userId"&equalTo="${currentUser}"`)
      .success(function(favoriteObject) {
        // console.log(currentUser);
        let favoriteCollection = favoriteObject;
        Object.keys(favoriteCollection).forEach(function(key) {
          favoriteCollection[key].id=key;
          favorites.push(favoriteCollection[key]);
        });
        resolve(favorites);
      })
      .error(function(error) {
        reject(error);
      });
    });
  };

  let addToFavorites = function(newFavorite) {
    return $q(function(resolve, reject) {
      $http.post(`${FirebaseURL}/favorites/.json`,
        JSON.stringify(newFavorite))
      .success(function(ObjFromFirebase) {
        resolve(ObjFromFirebase);
      })
      .error(function(error) {
        reject(error);
      });
    });
  };

  let deleteFavorite = function(favoriteId) {
    return $q(function(resolve, reject) {
      $http.delete(
        `${FirebaseURL}/favorites/${favoriteId}.json`
      ).success(function() {
        console.log("Item deleted");
        resolve();
      }).error(function(error) {
        reject();
      });
    });
  };

  let editFavorite = function(favorite) {
    return $q(function(resolve, reject) {
      $http.put(`${FirebaseURL}/favorites/${favorite.id}.json`, favorite)
      .success(function(ObjFromFirebase) {
        resolve(ObjFromFirebase);
      })
      .error(function(error) {
        reject(error);
      });
    });
  };

  return {getFruitList, getVeggieList, getRecipeList, getFavoriteList, addToFavorites, deleteFavorite, editFavorite};

});
