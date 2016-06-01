(function(){
angular.module('myApp').controller('formCtrl',formCtrl);
    function formCtrl($scope,formService){
  $scope.user=null;
        $scope.getUser =function(){
            console.log('inside controller');
            formService.getAllUSer().then(function(response){
                $scope.user=response;
                console.log($scope.user);
            })
        }
    }
})();
