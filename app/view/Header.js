/**
 * Created by Erzunov on 11.03.2015.
 */
define([ 'backbone', './defaultView' ], function( Backbone, DefaultView ) {
	var Header = DefaultView.extend({

		el: $("#Header_wrapper"), // DOM элемент widget'а
		template: _.template($('#Header').html()),

		events: {
			'click .js-top-menu-toggle': 'toggleMenu',
			'click .js-go-to-skills': 'toSkills',
			'click .js-go-to-history': 'toHistory',
			'click .js-go-to-contacts': 'toContacts'
		},

		initialize: function () {
			this.render();
			this.container = window.DI.getContainer();
		},
		toggleMenu: function( event ) {
			var $topMenu = $('.js-top-menu');
			$topMenu.toggleClass('top-menu_list-hidden');
		},
		toSkills: function( event ) {
			event.preventDefault();
			$( document.body ).scrollTo('#section-skills', 500);
		},
		toHistory: function( event ) {
			event.preventDefault();
			$( document.body ).scrollTo('#section-history', 500);
		},
		toContacts: function( event ) {
			event.preventDefault();
			$( document.body ).scrollTo('#section-contacts', 500);
		}
	});
	return Header;
});