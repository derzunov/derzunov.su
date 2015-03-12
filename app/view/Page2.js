/**
 * Created by Erzunov on 16.02.2015.
 */
define([ 'backbone', './defaultPage' ], function( Backbone, DefaultPage ) {
	var Page2 = DefaultPage.extend({

		el: $("#Page2_wrapper"), // DOM элемент widget'а
		template: _.template($('#Page2').html())

	});
	return Page2;
});