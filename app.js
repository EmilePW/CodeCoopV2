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
		templateUrl : 'views/code.php',
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
				/* Remove JS for trial
				js : {
					lineNumbers: true,
					indentWithTabs: true,
					theme: 'default',
					lineWrapping: true,
					mode: 'javascript'
				}
				*/
		    };

	$scope.tab = 1;

	$scope.editorValues = {
					html : "<html>\n" +
						   "<head>\n" +
						   "\t<title></title>\n" +
						   "</head>\n" +
						   "<body>\n" +
						   "<style>" +
						   "</style>\n" +
						   "<!-- Enter Your Code Below -->\n\n" +
						   "<script></script>\n" +
						   "</body>\n" +
						   "</html>",
					css: "body {\n\t\n}\n\n"
					//js : "//This is the javascript editor\n\n"
				};

	var staticHtml = 	   "<html>\n" +
						   "<head>\n" +
						   "\t<title></title>\n" +
						   "</head>\n" +
						   "<body>\n" +
						   "<style>" +
						   "</style>\n" +
						   "<!-- Enter Your Code Below -->\n\n" +
						   "</body>\n" +
						   "</html>"

	document.querySelector('.output').srcdoc = $scope.editorValues.html;

	$scope.render = function() {
		var output = document.querySelector('.output');
		var code = $scope.editorValues;
		var currentCode = code.html;
		currentCode = currentCode.replace('</style>', code.css + '</style>');
		output.srcdoc = currentCode;
		console.log(output.srcdoc);
	}

	addEventListener("keydown", $scope.render);
});