/**
 * Created by Erzunov on 16.02.2015.
 */
requirejs.config({
	baseUrl: 'lib',
	shim : {
		bootstrap : { "deps" :['jquery'] }
	},
	paths: {
		bootstrap: 'bootstrap',
		jquery: 'jquery',
		app: '../app'
	}
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);