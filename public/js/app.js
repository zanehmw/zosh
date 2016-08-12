"use strict";

(function(){
  angular
  .module("zosh", [
    "ui.router"
  ])
  .config(Router)
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
  function productsIndexCtrl(){
    var vm    = this;
    vm.products   = [

      {name: "Product1"},
      {name: "Product2"},
      {name: "Product3"}

  ];
  }
  productsShowCtrl.$inject = ["$stateParams"];
  function productsShowCtrl($stateParams){
    var vm    = this;
    vm.product  = $stateParams;
  }
})();
