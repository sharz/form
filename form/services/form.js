(function(){
angular.module('myApp').service('formService',formService);
function formService($http,$q){
    var user={};
    baseUrl="form.json";
    var deferred =$q.defer();
    this.getAllUSer = function(){
        console.log('in getAllUser');
        return $http.get(baseUrl).then(function(response){
           user=response.data;
            deferred.resolve(user);
            return deferred.promise
        },function(error){
            deferred.reject(error);
            return deferred.promise
        });
    }
}
})();