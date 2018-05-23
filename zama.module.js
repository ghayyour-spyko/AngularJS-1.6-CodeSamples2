angular.module('zamaModule', [])
.factory('zamaFactory', function ($http) {
    return {
        getData: function () {
        	return $http({
                method: 'GET',
                url: 	'zama-server/json/data.json',
                cache: true
            });
        }
    }
});