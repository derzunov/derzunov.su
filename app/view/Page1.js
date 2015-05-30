/**
 * Created by Erzunov on 16.02.2015.
 */
define([ 'backbone', './defaultPage', 'jquery.scrollTo' ], function( Backbone, DefaultPage ) {
	var Page1 = DefaultPage.extend({

		el: $("#Page1_wrapper"), // DOM элемент widget'а
		template: _.template($('#Page1').html()),

		events: {
			'click .js-main-first-down-next': 'downNext',
			'click .right ': 'right',
			'click .left ': 'left'
		},

		initialize: function () {
			var self = this;

			this.render();

			$( document ).ready(function() {
				$('.carousel-style').height($(window).height());
				$('.js_carousel').carousel();
			});
		},

		downNext: function( event ) {
			event.preventDefault();
			$( document.body ).scrollTo('#section-skills', 500);
		},

		right: function( event ) {
			event.preventDefault();
			$('.carousel-style').carousel( 'next' );
		},

		left: function( event ) {
			event.preventDefault();
			$('.carousel-style').carousel( 'prev' );
		}

	});
	return Page1;
});