(function(){
	'use strict';

	angular
	.module('webMyApp')
	.directive('stPullMenu', stPullMenu)
	.directive('stDesktopMenu', stDesktopMenu)
	.directive('stMobileMenu', stMobileMenu);

	function stPullMenu(valueSv){
		return {
			link: function(scope, iElement, iAttrs) {
				var openClass = 'is-open',
				closeClass = 'is-close',
				mobileMenu = $('.menu-mob'),
				viewContainer = $('.view-container');

				scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
					if(valueSv.loadCounter > 0){
						close();
					}
				});

				iElement.on('click', function(event) {
					event.preventDefault();
					if($(this).hasClass(openClass)){
						close();
					} else {
						open();
					}
				});

				
			}
		};
	}

	function stDesktopMenu(){
		return {
			link: function(scope, iElement, iAttrs) {
				var li = iElement.find('li'),
				menuDesk = iElement.find('.menu-desk'),
				fadeSpeedEffect = 100,
				subMegaClass = 'mega',
				subListClass = 'list',
				hasSubClass = 'has-sub',
				hoverClass = 'hover',
				activeClass = 'active',
				subCurrent = '';

				showArrow();

				scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
					autoActive();
				});

			

				function showArrow(){
					li.has('ul,div').addClass(hasSubClass).find('>a').append('<i>&nbsp</i>');
				}

				function autoActive(){
					var liActive = li.filter('.'+activeClass);
					liActive.parents('li').addClass(activeClass);
				}
			}
		};
	}

	function stMobileMenu(){
		return {
			link: function(scope, iElement, iAttrs) {

			}
		};
	}
})();