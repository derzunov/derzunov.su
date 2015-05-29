/**
 * Created by Erzunov on 16.02.2015.
 */
define([
	'backbone',
	'./Header',
	'./Footer',
	'./Page1',
	'./Page2',
	'./PageCustomName'
], function(  Backbone, Header, Footer, Page1, Page2, PageCustomName ) {
	return function() {
		return {
			defaultViews: {
				Header: new Header(),
				Footer: new Footer()
			},
			pageList: {
				Page1: new Page1(),
				Page2: new Page2().render(),
				PageCustomName: new PageCustomName().render()
			}
		};
	}
});