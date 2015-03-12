/**
 * Created by Erzunov on 16.02.2015.
 */
define([ 'backbone', './defaultPage' ], function( Backbone, DefaultPage ) {
	var PageCustomName = DefaultPage.extend({

		el: $("#PageCustomName_wrapper"), // DOM элемент widget'а
		template: _.template($('#PageCustomName').html())

	});
	return PageCustomName;
});