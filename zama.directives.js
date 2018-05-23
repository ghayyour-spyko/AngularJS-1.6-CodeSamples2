angular.module('zamaModule')
.directive('customers', function() {
  return {
  	scope: {
       people: '='
	   },
	   templateUrl: 'zama-template.html'
  };
});