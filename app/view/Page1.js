/**
 * Created by Erzunov on 16.02.2015.
 */
define([ 'backbone', './defaultPage', 'jquery.scrollTo', 'in-viewport' ], function( Backbone, DefaultPage ) {
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

			this.$el.find('.feature__img').inViewport({
				callbackIn: function( $element ) {
					console.log('IN!');
					console.log(this);
					console.log($element);
				}
			})
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