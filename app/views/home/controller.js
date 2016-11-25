var homeCtrl = (function() {
    'use strict';

    angular
    .module('webMyApp')
    .controller('homeCtrl', homeCtrl);

    function homeCtrl($scope, $state, $stateParams) {
       

       

       

        function popup_gallery_inline(){
            var inlineData = [{
                username: '',
                userLocation: ''
            },{
                username: '',
                userLocation: ''
            }];

            js_frw.open_popup({
                items:inlineData,
                effect: 'custom-zoom',
                inline: {
                    markup:
                    '<div class="custom-popup custom-popupAnimation" style="max-width:800px">' +
                    '<div class="pop-content">' +
                    '<h2 class="mfp-username"></h2>' +
                    '<div class="mfp-userLocation"></div>' +
                    '<div>' +
                    '</div>'
                }
            });
        }


    }


})();