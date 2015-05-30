/**
 * Created by Erzunov on 16.02.2015.
 */
define([
	'backbone',
	'./Header',
	'./Footer',
	'./Page1'
], function(  Backbone, Header, Footer, Page1 ) {
	return function() {
		return {
			defaultViews: {
				Header: new Header(),
				Footer: new Footer()
			},
			pageList: {
				Page1: new Page1()
			}
		};
	}
});