heroApp.controller('searchController', ['$scope', '$http', function ($scope, $http) {
  $scope.powerType = '';
  $scope.filter = '';
  $scope.heroes = {};
  var powers = {};

getHeroes();
getPowers();

function getHeroes() {
    $http.get('/heroes')
      .then(function (response) {

        $scope.heroes = response.data;
        console.log('GET /heroes ', response.data);

      });
  }

  $scope.deleteHero = function (id) {
    console.log(id);
  $http.delete('/heroes/' + id)
    .then(function (response) {
      console.log('DELETE /heroes ', id);
      getHeroes();
    });
};

function getPowers() {
  $http.get('/search')
    .then(function (response) {
      console.log('GET /search ', response.data);
      powers = response.data;
    });
  }

$scope.powerSearch = function () {
     console.log('performing power search');
     $scope.filter = [];
for (var i = 0; i < $scope.heroes.length; i++){
if($scope.heroes[i].power_name === $scope.powerType){
 $scope.filter.push($scope.heroes[i]);
} else if ($scope.powerType === ''){
 $scope.filter.push($scope.heroes[i]);
}
}
   };


}]);
