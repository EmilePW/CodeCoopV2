'use strict';

angular.module('codecoop', ['ngRoute', 'ui.codemirror']);

angular.module('codecoop')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl : 'views/home.html',
		controller : 'homeCtrl'
	})

	.when('/code', {
		templateUrl : 'views/code.html',
		controller : 'codeCtrl'
	})

	.otherwise({
		redirectTo : 'views/home.html' 
	})
}]);

angular.module('codecoop').controller('homeCtrl', function( $scope ) {

});

angular.module('codecoop').controller('codeCtrl', function( $scope ) {
	$scope.editorOptions = {
				html : {
					lineNumbers: true,
					indentWithTabs: true,
					theme: 'default',
					lineWrapping: true,
					mode: 'htmlmixed'
				},
				css : {
					lineNumbers: true,
					indentWithTabs: true,
					theme: 'default',
					lineWrapping: true,
					mode: 'css'
				},
				js : {
					lineNumbers: true,
					indentWithTabs: true,
					theme: 'default',
					lineWrapping: true,
					mode: 'javascript'
				}
		    };

	$scope.tab = 1;

	$scope.editorValues = {
					html : "<html>\n" +
						   "<head>\n" +
						   "\t<title></title>\n" +
						   "</head>\n" +
						   "<body>\n" +
						   "</body>\n" +
						   "</html>",
					css: "body {\n\t\n}\n\n",
					js : "//This is the javascript editor\n\n"
				};
});