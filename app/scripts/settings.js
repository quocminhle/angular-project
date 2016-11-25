/**********************************************************************************************************************
												Cấu hình site web
***********************************************************************************************************************/
var js_setting = (function(){
	'use strict';

	var close_Date = new Date(2018,0,1,23,59,59),
		hostname = window.location.host,
		contruct = {},
		date_current = new Date();
	

	switch(hostname){
		case 'live':
		contruct.google_apiKey = '';
		contruct.base_url_database = 'http://live.com/';
		contruct.google_analytic_ids = [''];
		contruct.google_api_idClient = '';
		contruct.preview_fix = 'upLive';
		contruct.base_url = 'http://live.com/';
		contruct.id_facebookApp = '';
		break;
		default:
		contruct.google_apiKey = 'AIzaSyBkB5GqIi0zwqONIzbePzXWYlBmc9refyk';
		contruct.base_url_database = 'http://localhost:5656/';
		contruct.google_analytic_ids = [''];
		contruct.google_api_idClient = '111608153734-bhae0b9vmsapmbv6dv7djsgsg90iitnt.apps.googleusercontent.com';
		contruct.preview_fix = 'onLocal';
		contruct.base_url = 'http://localhost:9888/';
		contruct.id_facebookApp = '5a3d9c21557eef59fe8234c1d9856f73';
		break;
	}

	return {
		reload_page_on_change_state: false,
		finish_time_storage: undefined,
		html5_mode: false,
		delay_animate: 0,
		preview_fix: contruct.preview_fix,
		base_url: contruct.base_url,
		base_url_database: contruct.base_url_database,
		host_sub_folder: '/',
		api_ver: '',
		stop_campaign: date_current > close_Date,
		google: {
			api:{
				apiKey: contruct.google_apiKey,
				clientId: contruct.google_api_idClient,
				scope: [
				'https://www.googleapis.com/auth/plus.login'
				]
			},
			ga: {
				ids: contruct.google_analytic_ids
			}
		},
		sequence_transition_page: [
		{name_state:'home', transition:'0,0'},
		{name_state:'about', transition:'0,0'},
		{name_state:'contact', transition:'0,0'}
		],
		page_loop_transition: true,
		transition_delay_page: 1500,
		count_page_visible: 5,
		load_preview_resource: [
		]		
	}
})();