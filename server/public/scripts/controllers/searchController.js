heroApp.controller('searchController', ['$scope', '$http', function ($scope, $http) {
  $scope.powerType = '';
  $scope.heroes = {};

getHeroes();

function getHeroes() {
    $http.get('/search')
      .then(function (response) {

        $scope.heroes = response.data;
        console.log('GET /search ', response.data);

      });
  }

  $scope.deleteHero = function (id) {
    console.log(id);
  $http.delete('/search/' + id)
    .then(function (response) {
      console.log('DELETE /search ', id);
      getHeroes();
    });
};

}]);
