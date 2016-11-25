(function(){
	'use strict';

	angular
	.module('webMyApp')
	.directive('home', home);

	function home(){
		return {
			restrict: 'A',
			link: function (scope, iElement, iAttrs) {

			}
		};
	}
})();