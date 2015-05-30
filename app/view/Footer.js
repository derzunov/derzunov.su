/**
 * Created by Erzunov on 11.03.2015.
 */
define([ 'backbone', './defaultView' ], function( Backbone, DefaultView ) {
	var Footer = DefaultView.extend({

		el: $("#Footer_wrapper"), // DOM элемент widget'а
		template: _.template($('#Footer').html()),

		events: {
			'click .js-go-to-top': 'toTop',
			'click .js-go-to-skills': 'toSkills',
			'click .js-go-to-history': 'toHistory',
			'click .js-go-to-contacts': 'toContacts'
		},

		initialize: function () {
			this.render();
		},

		toTop: function( event ) {
			event.preventDefault();
			$( document.body ).scrollTo(0, 500);
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
	return Footer;
});