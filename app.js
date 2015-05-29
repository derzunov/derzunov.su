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
		scrollTo: {"exports" : "jquery.scrollTo"}
	},
	paths: {
		bootstrap: 'bootstrap.min',
		jquery: 'jquery-1.11.3.min',
		cppFunctions: '../app/configs/compiled/cppFunctions',
		app: '../app',
		scrollTo: 'jquery.scrollTo.min'
	}
});
