"use strict";

(function(){
  angular
  .module("zosh", [
    "ui.router"
  ])
  .config(Router);
  Router.inject = ["$stateProvider", "$locationProvider"];
  function Router($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
    .state("main", {
      url: "/",
      template: "<h2>Major Key Alert</h2>"
    })
    .state("test", {
      url: "/test",
      template: "<h2>Major Test Alert</h2>"
    })

  }
})();
