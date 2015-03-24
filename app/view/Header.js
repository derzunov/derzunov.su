/**
 * Created by Erzunov on 11.03.2015.
 */
define([ 'backbone', './defaultView' ], function( Backbone, DefaultView ) {
	var Header = DefaultView.extend({

		el: $("#Header_wrapper"), // DOM элемент widget'а
		template: _.template($('#Header').html()),

		events: {
			'click .js-top-menu-toggle': 'toggleMenu'
		},

		initialize: function () {
			this.render();
			this.container = window.DI.getContainer();
		},
		toggleMenu: function( event ) {
			var $topMenu = $('.js-top-menu');
			$topMenu.toggleClass('top-menu_list-hidden');
		}
	});
	return Header;
});