/**
 * Created by Erzunov on 16.02.2015.
 */
requirejs.config({
	// Start loading the main app file. Put all of
	// your application logic in there.
	deps: ['app/main'],
	baseUrl: 'lib',
	shim : {
		bootstrap : { "deps" :['jquery'] }
	},
	paths: {
		bootstrap: 'bootstrap',
		jquery: 'jquery',
		cppFunctions: '../app/configs/compiled/cppFunctions',
		app: '../app'
	}
});
