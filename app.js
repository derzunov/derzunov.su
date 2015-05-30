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
		"jquery.scrollTo.min": ["jquery"]
	},
	paths: {
		bootstrap: 'bootstrap.min',
		jquery: 'jquery-1.11.3.min',
		cppFunctions: '../app/configs/compiled/cppFunctions',
		app: '../app'
	}
});
