heroApp.controller('entryController', ['$scope', '$http', function ($scope, $http) {
  $scope.powerType = '';
  $scope.currentHero = {};

  $scope.submitCurrentHero = function () {
    var data = $scope.currentHero;
    $scope.currentHero.power_name = $scope.powerType;
    console.log(data);
    $http.post('/heroes', data)
      .then(function () {
        console.log('POST /heroes');
      });
  };

}]);
