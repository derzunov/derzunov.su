/**
 * Created by Erzunov on 16.02.2015.
 */
requirejs.config({
	// Start loading the main app file. Put all of
	// your application logic in there.
	deps: ['app/main'],
	baseUrl: 'lib',
	shim : {
		bootstrap : { "deps" :['jquery'] },
		"jquery.scrollTo.min": ["jquery"],
		'create-jq-plugin': ["jquery"],
		'in-viewport': ["create-jq-plugin", "jquery"],
		'isIE': ["jquery"],
		rivets : {
			"deps" : ["sightglass"],
			"exports" : "rivets"
		}
	},
	paths: {
		bootstrap: 'bootstrap',
		jquery: 'jquery-1.11.3',
		app: '../app',
		"sightglass": "sightglass",
		"rivets": "rivets"
	}
});
