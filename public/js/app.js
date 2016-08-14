"use strict";

(function(){
  angular
  .module("zosh", [
    "ui.router",
    "ngResource"
  ])
  .config(Router)
  .factory("Product", productFactory)
  .controller("productsIndexController", productsIndexCtrl)
  .controller("productsShowController", productsShowCtrl);
  Router.inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider"];
  function Router($stateProvider, $locationProvider, $urlRouterProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
    .state("productsIndex", {
      url:          "/",
      templateUrl:     "/html/products-index.html",
      controller:   "productsIndexController",
      controllerAs: "pIndexVM"
    })
    .state("productsShow", {
      url: "/products/:name",
      templateUrl: "/html/products-show.html",
      controller: "productsShowController",
      controllerAs: "pShowVM"

    });
    $urlRouterProvider.otherwise("/");

  }
  productFactory.$inject = ["$resource"];
  function productFactory($resource){
    var Product = $resource("/api/products");
    return Product;

  }
  productsIndexCtrl.$inject = ["Product"];
  function productsIndexCtrl(Product){
    var vm    = this;
    vm.products   = Product.query();
    vm.create     = function(){
      Product.save(vm.newProduct, function(response){
        vm.products.push(response);
      });
    }
  }
  productsShowCtrl.$inject = ["$stateParams"];
  function productsShowCtrl($stateParams){
    var vm    = this;
    vm.product  = $stateParams;
  }
})();
