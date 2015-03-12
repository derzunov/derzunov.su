/**
 * Created by Erzunov on 11.03.2015.
 */
define([ 'backbone', './defaultView' ], function( Backbone, DefaultView ) {
	var Header = DefaultView.extend({

		el: $("#Header_wrapper"), // DOM элемент widget'а
		template: _.template($('#Header').html()),

		events: {
			'click .js-window-close': 'close'
		},

		initialize: function () {
			this.render();
			this.container = window.DI.getContainer();
		},
		close: function() {
			console.log('close');
			/*Позже перепилю на клиентские функции, ссылающиеся при необходимости на мок модель*/
			this.container.client.closeWindow();
		}
	});
	return Header;
});