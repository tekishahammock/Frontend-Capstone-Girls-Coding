angular.module("app")
  .controller("NavCtrl", function($scope, $rootScope, AuthFactory) {
    const navList = document.getElementsByClassName("nav-link");

    // Assigns "selected" class to navbar options when on matching page
    $rootScope.$watch("route", () => {
      console.log($rootScope.route);
      for (let i = 0; i < navList.length; i++) {
        if (navList.item(i).classList.contains("current-page")) {
          navList.item(i).classList.remove("current-page");
        }
      }
      for (let i = 0; i < navList.length; i++) {
        if (navList.item(i).id === $rootScope.route) {
          navList.item(i).classList.add("current-page");
        }
      }
    });

    $scope.logoutNow = () => AuthFactory.logout().then(console.log("successful logout")).catch(alert);

  });
