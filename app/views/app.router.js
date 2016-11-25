var appRouter = (function(){
	'use strict';

	angular
	.module('webMyApp')
	.run(run);

	function run(routerHelper){
		routerHelper.configureStates(js_setting.routings, '/');
	}

	var resolve = {
		 // "@ngInject"; 
		beforeStateChange: function($q, accountSv, resourceSv){
			return $q.when()
			.then(function(){
				var defer = $q.defer();

				if (!accountSv.isSignedIn()) {
					accountSv.siteLogin(function(resp){
						defer.resolve(resp);
					});
				} else {
					defer.resolve(accountSv.getProfile());
				}

				return defer.promise;
			})
			.then(function(profile){
				var defer = $q.defer();

				resourceSv.api('views/account/json/email.json').get(function(resp){
					defer.resolve({profile: profile, mail: resp.toJSON()});
				});

				return defer.promise;
			});
		}
	};

})();